const { Client } = require("pg");
//const user = { username: "postgresql"}

const DATABASE_URL =
process.env.DATABASE_URL || 'postgres://localhost/linkerator'
const client = new Client(DATABASE_URL);

client.connect();

module.exports = client;
