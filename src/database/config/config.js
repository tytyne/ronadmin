require('dotenv').config()
const assert =require("assert")
// console.log(process.env.DEV_DATABASE_URL)

// module.exports = {
//   development: {
//     url: process.env.DEV_DATABASE_URL,
//     dialect: 'mssql',
//     dialectOptions: {
//       encrypt: true
//     }
//   },
//   test: {
//     url: process.env.TEST_DATABASE_URL,
//     dialect: 'mssql',
//     dialectOptions: {
//       encrypt: true
//     }
//   },
//   production: {
//     url: process.env.DATABASE_URL,
//     dialect: 'mssql',
//     dialectOptions: {
//       encrypt: true
//     }
//   },
// }
const {PORT, HOST, HOST_URL, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORT, 'PORT is require');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: SQL_SERVER,
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASSWORD,
        options: {
            encrypt: sqlEncrypt,
            enableArithAbort: true
        },
    },
};

