import { DataTypes } from 'sequelize';
import sequelize from '../database';

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  fullname: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  sex: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.INTEGER,
  },
});

export default User;