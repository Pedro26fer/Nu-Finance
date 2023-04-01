import signUpUserController from "../controllers/user/signupUser.controller";
import { Express } from "express";


export const signUpRoute = (app: Express) => {
    app.post("/signup", signUpUserController)
}