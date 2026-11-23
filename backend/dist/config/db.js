"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = connectDB;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv = __importStar(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv.config({ path: path_1.default.resolve(__dirname, '../../.env') });
dotenv.config({ path: path_1.default.resolve(process.cwd(), 'backend/.env') });
dotenv.config({ path: path_1.default.resolve(process.cwd(), '.env') });
async function connectDB() {
    const uri = process.env.MONGODB_URI || 'mongodb+srv://sanmoratechno_db_user:sanmora_db2025@cluster0.ubbchtn.mongodb.net/manilifestyle?appName=Cluster0';
    try {
        const conn = await mongoose_1.default.connect(uri, {
            serverSelectionTimeoutMS: 8000,
            connectTimeoutMS: 10000,
        });
        console.log(`[MongoDB Atlas] Connected successfully to host: ${conn.connection.host}`);
        console.log(`[MongoDB Atlas] Database: ${conn.connection.name}`);
        mongoose_1.default.connection.on('error', (err) => {
            console.error('[MongoDB Atlas] Runtime connection error:', err);
        });
        mongoose_1.default.connection.on('disconnected', () => {
            console.warn('[MongoDB Atlas] Lost connection to cluster. Reconnecting...');
        });
        return conn;
    }
    catch (error) {
        console.error('[MongoDB Atlas] Connection failed:', error?.message);
        return null;
    }
}
