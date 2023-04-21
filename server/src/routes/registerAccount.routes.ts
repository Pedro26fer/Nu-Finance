import { Express } from "express";
import registerAccountController from "../controllers/accounts/registeAccount.controller";
import { isLoggedMiddleware } from "../middlewares/isLogged.midleware";

export const registerAccountRoute = (app: Express) => {
    app.post("/addAccount", isLoggedMiddleware, registerAccountController)
}
