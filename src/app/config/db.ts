import mongoose from "mongoose";

// MongoDB connection cache for serverless environments
let isConnected = false;
let connectionPromise: Promise<typeof mongoose> | null = null;

export const connectDB = async (): Promise<typeof mongoose> => {
    // If already connected, return immediately
    if (isConnected && mongoose.connection.readyState === 1) {
        return mongoose;
    }

    // If connection is in progress, wait for it
    if (connectionPromise) {
        return connectionPromise;
    }

    // Create new connection
    // Tuned for Vercel serverless: each function instance keeps its OWN pool, so
    // total connections = maxPoolSize x (warm instances). A big pool here just
    // races toward the Atlas 500-connection cap and storms the shared tier on
    // cold-start bursts. Keep the pool small and let Vercel scale instances.
    connectionPromise = mongoose.connect(process.env.DATABASE_URL as string, {
        // Enough for the few concurrent queries one warm instance handles; small
        // enough that many instances together stay well under the 500 cap.
        maxPoolSize: 10,
        // 0 = open connections lazily. minPoolSize > 0 forces every cold instance
        // to eagerly establish connections before serving, slowing cold starts and
        // burning shared-tier connection slots. The opposite of what serverless wants.
        minPoolSize: 0,
        // Release connections from instances that go idle, freeing slots on the
        // shared tier instead of holding them across the connection cap.
        maxIdleTimeMS: 30000,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        bufferCommands: false,
    }).then((db) => {
        isConnected = true;
        console.log("MongoDB connected (cached)");
        return db;
    }).catch((err) => {
        connectionPromise = null;
        isConnected = false;
        throw err;
    });

    return connectionPromise;
};

// For Vercel serverless: ensure connection before each request
export const ensureDbConnection = async () => {
    if (mongoose.connection.readyState !== 1) {
        await connectDB();
    }
};
