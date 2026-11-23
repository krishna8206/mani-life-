import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config({ path: path.resolve(process.cwd(), 'backend/.env') });
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export async function connectDB(): Promise<typeof mongoose | null> {
  const uri = process.env.MONGODB_URI || 'mongodb+srv://sanmoratechno_db_user:sanmora_db2025@cluster0.ubbchtn.mongodb.net/manilifestyle?appName=Cluster0';

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 8000,
      connectTimeoutMS: 10000,
    });

    console.log(`[MongoDB Atlas] Connected successfully to host: ${conn.connection.host}`);
    console.log(`[MongoDB Atlas] Database: ${conn.connection.name}`);

    mongoose.connection.on('error', (err: any) => {
      console.error('[MongoDB Atlas] Runtime connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('[MongoDB Atlas] Lost connection to cluster. Reconnecting...');
    });

    return conn;
  } catch (error: any) {
    console.error('[MongoDB Atlas] Connection failed:', error?.message);
    return null;
  }
}
