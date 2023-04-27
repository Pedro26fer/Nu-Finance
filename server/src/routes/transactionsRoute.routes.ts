import { Express } from "express";
import addTransactionController from "../controllers/transactions/addTransactions.controller";
import { isLoggedMiddleware } from "../middlewares/isLogged.midleware";
import getAccountsController from "../controllers/accounts/getAcounts.controller";

export const transactionsRoute = (app: Express) => {
    app.post("/addTransaction/:account", isLoggedMiddleware, addTransactionController)
    app.get("/accounts", isLoggedMiddleware, getAccountsController)
}