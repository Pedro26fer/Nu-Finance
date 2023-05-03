import { DataSource } from "typeorm";
require("dotenv").config();
import { User } from "./entities/user.entity";
import { Accounts } from "./entities/accounts.entity";
import { Transactions } from "./entities/transactions.entity";
import {reallyLastMigrations1683089435328} from "./migrations/1683089435328-reallyLastMigrations"






const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",    
  username: process.env.POSTGREE_USER,
  password: process.env.POSTGREE_PASSWORD,
  database: process.env.POSTGREE_DATABASE,

  synchronize: false,
  logging: true,

  entities: [User, Accounts, Transactions],
  migrations: [reallyLastMigrations1683089435328]
  
});


export default AppDataSource;
