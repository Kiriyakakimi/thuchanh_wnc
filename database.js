import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('thuchanh_wnc', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: false,
});

export default sequelize;