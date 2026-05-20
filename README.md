# jiboneducation-server

Jibon Education — IELTS Examination System (Backend API).

## Tech
Node.js · Express · TypeScript · MongoDB (Mongoose)

## Setup
1. `npm install`
2. Copy `.env.example` to `.env` and fill in the values (especially `DATABASE_URL`).
3. `npm run start:dev` — runs on port 5000.

## Seed an admin user
```
npx ts-node src/seeds/seed-admin.ts
```

> Note: `.env` is git-ignored. Never commit real credentials.
