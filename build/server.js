"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./core/logger"));
const app_config_1 = require("./core/config/app-config");
const app_1 = __importDefault(require("./app"));
const loader_1 = __importDefault(require("./core/loader"));
app_1.default
    .listen(app_config_1.port, () => {
    logger_1.default.info(`server running on port : ${app_config_1.port}`);
    (0, loader_1.default)().then(() => logger_1.default.info("loading completed"));
})
    .on('error', (e) => {
    console.log(e);
    logger_1.default.error(e);
});
