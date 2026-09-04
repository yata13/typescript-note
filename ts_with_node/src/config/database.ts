import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entity/User';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '12345678',
  database: process.env.DB_NAME || 'ts',
  synchronize: process.env.NODE_ENV !== 'production',

  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});