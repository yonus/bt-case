import logger from '../logger';
import  mongooseLoader from './mongoose-loader'
export default  async () => {
    const mongoConnection = await mongooseLoader();
    logger.info('DB loaded and connected!');
}