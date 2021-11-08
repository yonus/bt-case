
import dotenv from 'dotenv';

const envFound = dotenv.config();
if (envFound.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export const environment = process.env.NODE_ENV || 'development';


export const port = process.env.PORT;
export const mongoConnectionString = process.env.MONGO_CONNECTION_STRING



export const jwtSecret = process.env.JWT_SECRET || "bitaksi";
export const jwtAlgorithm = process.env.JWT_ALGO;

export const logDirectory = process.env.LOG_DIR || ".log";

export function getDefaultLoginUsername() {
    return process.env.DEFAULT_LOGIN_USERNAME
}


export function getDefaultLoginPassword() {
    return process.env.DEFAULT_LOGIN_PASSWORD
}


