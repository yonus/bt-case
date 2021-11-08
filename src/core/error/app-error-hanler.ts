import {NextFunction, Request, Response} from "express";
import {AppError, InternalError, InvalidTokenError} from "./app-error";
import {environment} from "../config/app-config";
import logger from '../logger';


export const appErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        AppError.handle(err, res);
    } else if (err.name === 'UnauthorizedError') {
        AppError.handle(new InvalidTokenError(err.message),res)
    } else {
        if (environment === 'development') {
            logger.error(err);
            return res.status(500).send(err.message);
        }
        AppError.handle(new InternalError(), res);
    }
}