import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const port = 3000;

export const typeOrmOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'devmobin',
  password: 'Kwc8rs8jYWRnQTMA',
  database: 'devdemo_db',
  entities: ['../**/*.entity.ts'],
  synchronize: true
}
