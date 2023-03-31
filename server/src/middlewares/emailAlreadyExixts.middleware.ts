import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../error/appError";

export const emailAlreadyExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const {email} = req.body
    
    const userRepository = AppDataSource.getRepository(User)
    
    const emailAlreadyExists = await userRepository.findOne({where: {email}})

    if(emailAlreadyExists){
        throw new AppError(403,"Email already registered")
    }

    next()

}