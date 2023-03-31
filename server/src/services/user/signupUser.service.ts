import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from 'bcrypt';
import { IUserSignUp} from "../../interfaces/user";


const signUpUserService = async ({name,email,password} : IUserSignUp) => {

    const userRepository = AppDataSource.getRepository(User)
    
    const newUser = await userRepository.save({
        name,
        email,
        password: bcrypt.hashSync(password,10)
    })


    return newUser
}

export default signUpUserService