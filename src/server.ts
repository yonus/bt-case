import logger from './core/logger';
import { port } from './core/config/app-config';
import app from './app';
import loader from "./core/loader"
app
    .listen(port, () => {
        logger.info(`server running on port : ${port}`);
        loader().then(() => logger.info("loading completed"))
    })
    .on('error', (e) =>{
        console.log(e)
        logger.error(e)
    });