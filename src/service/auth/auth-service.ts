import jwt from 'jsonwebtoken';
import * as config from '../../core/config/app-config'
import {AuthFailureError, BadRequestError} from "../../core/error/app-error";

export function login (username:String,password:String):String{

    if(!username || !password){
        throw new BadRequestError("Username and password are required")
    }

    if (config.getDefaultLoginPassword() != username || config.getDefaultLoginUsername() != password){
        throw new AuthFailureError()
    }
    return generateToken(username)

}






function generateToken(username:String):String{
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);


    return jwt.sign(
        {
            username: username,
            exp: exp.getTime() / 1000,
        },
        config.jwtSecret

    );
}