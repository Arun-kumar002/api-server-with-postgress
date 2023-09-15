const { Options, Sequelize } = require("sequelize");


// const options = {
//     host: '172.19.0.2',
//     // port: '5432',
//     database: 'user_service',
//     dialect: 'postgres',
//     username: 'root',
//     password: 'root'
// };
const options = {
    username: 'dtqmdzpx',
    password: 'LpJn75kf5oYff9E1QGlBThTbexibRlOd',
    database: 'dtqmdzpx',
    host: 'snuffleupagus.db.elephantsql.com',
    dialect: 'postgres',
}

// module.exports = {
//     development: {
//       username: 'dtqmdzpx',
//       password: 'LpJn75kf5oYff9E1QGlBThTbexibRlOd',
//       database: 'dtqmdzpx',
//       host: 'snuffleupagus.db.elephantsql.com',
//       dialect: 'postgres',
//     },
//   };

module.exports.sequelize = new Sequelize(options);