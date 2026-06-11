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
    connectionPromise = mongoose.connect(process.env.DATABASE_URL as string, {
        // Raised from 10 -> 50 so bursts of concurrent exam-takers don't queue
        // behind a 10-connection ceiling. Keep well under the Atlas 500-connection
        // cap: with serverless, total = maxPoolSize x (warm instances), so 50 leaves
        // headroom for several instances. Raise the tier (M10+) for true scaling.
        maxPoolSize: 50,
        // A few always-ready connections cut the ~50ms cold-connection cost per query.
        minPoolSize: 5,
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
