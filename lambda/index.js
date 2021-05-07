const mysql = require('mysql2/promise');
const SqlString = require('sqlstring');

let connection = null;

const getConn = async () => {
  if (connection == null) {
    connection = await mysql.createConnection(
      {
        host: process.env.RDS_HOSTNAME,
        user: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        port: process.env.RDS_PORT,
        database: process.env.RDS_DB
      });
  }
  return connection;
};


exports.handler = async (event) => {
  await getConn();

  let body = JSON.parse(event.body);

  let firstName = body.firstName;
  let lastName = body.lastName;
  let city = body.city;

  let sql = SqlString.format('INSERT INTO users (firstName, lastName, city, isDeleted) values (?, ?, ?, ?)', [firstName,lastName,city,0]);

  const results = await connection.execute(sql);

  const response = {
    statusCode: 200,
    body: JSON.stringify(body)
  };
  return response;
};