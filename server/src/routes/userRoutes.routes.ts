import signUpUserController from "../controllers/user/signupUser.controller";
import { Express } from "express";
import { isLoggedMiddleware } from "../middlewares/isLogged.midleware";
import getUserController from "../controllers/user/getUsers.controller";


export const userRoutes = (app: Express) => {
    app.post("/signup", signUpUserController),
    app.get("/profile", isLoggedMiddleware, getUserController)
}