import { emailAlreadyExistsMiddleware } from "../middlewares/emailAlreadyExixts.middleware";
import signUpUserController from "../controllers/user/signupUser.controller";
import { Express } from "express";


export const signUpRoute = (app: Express) => {
    app.post("/signup", emailAlreadyExistsMiddleware, signUpUserController)
}