const { Client } = require('pg');

const client = new Client({
  user: 'bmalamudroam',
  host: 'localhost',
  database: 'mystuffproject',
  password: '',
  port: 5432,
});

client.connect()
  .then(() => console.log('Connected to db'))
  .catch((err) => console.log('ERROR connecting to db: ', err));

module.exports.client = client;