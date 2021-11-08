import express, {Request, Response} from 'express';
import * as bodyParser from 'body-parser';
import controllers from "./controller";
import {appErrorHandler} from "./core/error/app-error-hanler";
import {NotFoundError} from "./core/error/app-error";


const app = express();
app.use(bodyParser.json())

controllers.forEach((controller) => {
    app.use('/', controller.getRouter());
});

app.use((req, res, next) => next(new NotFoundError()));
app.use(appErrorHandler);

export default app;