import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entity/User";


export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  username: "root",
  password: "12345678",
  database: "ts",

  entities: [User],

  synchronize: true,
});