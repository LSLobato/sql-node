const Sequelize = require('Sequelize');
const databaseConfig = require('../config/database');

// const sequelize = new Sequelize('database', 'username', 'password', {
//     dialect: 'mysql',
//     dialectOptions: {
//       // Your mysql2 options here
//     }
//   })

const connection = new Sequelize(databaseConfig);

module.export = connection;