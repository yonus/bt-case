import {connect} from "mongoose";
import { Db } from 'mongodb';
import * as config from '../config/app-config'


export default async (): Promise<Db> => {

    if (!config.mongoConnectionString){
        throw Error("Mongo connection string should be provided")
    }

    const connection = await connect(config.mongoConnectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });
    return connection.connection.db;
};