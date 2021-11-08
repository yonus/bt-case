"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_controller_1 = require("../../core/base-controller");
const authService = __importStar(require("../../service/auth/auth-service"));
const app_response_1 = require("../../core/response/app-response");
const BASE_PATH = "/auth";
const LOGIN_PATH = BASE_PATH + "/login";
class AuthenticationController extends base_controller_1.BaseController {
    constructor() {
        super();
    }
    initializeRouters() {
        this.router.post(LOGIN_PATH, this.login);
    }
    login(req, res) {
        const token = authService.login(req.body.username, req.body.password);
        new app_response_1.SuccessResponse('Login Successful', {
            token: token
        }).send(res);
    }
}
exports.default = AuthenticationController;
