import { Request, Response } from 'express'
import {BaseController} from "../../core/base-controller";

import * as authService from "../../service/auth/auth-service"
import {LoginRequest} from "../../interfaces/request/login-request";
import {SuccessResponse} from "../../core/response/app-response";


const BASE_PATH = "/auth"
const LOGIN_PATH = BASE_PATH + "/login"

class AuthenticationController extends BaseController{

    constructor() {
        super();
    }

    protected initializeRouters(): void {
        this.router.post(LOGIN_PATH,this.login)
    }


    login (req:Request<{},{},LoginRequest>, res:Response){
        const token = authService.login(req.body.username,req.body.password);
        new SuccessResponse('Login Successful', {
            token: token
        }).send(res);

    }





}

export default AuthenticationController
