import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const port = 3000;

export const typeOrmOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'devmobin',
  password: 'vAeic7XeraiiT33Q',
  database: 'devdemo_db',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
}
