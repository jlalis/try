
const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'zqvvgugfuodmdv',
  host: 'ec2-54-157-15-228.compute-1.amazonaws.com',
  database: 'devdjo4brjpsh2',
  password: '0c0bef954f1cdb1b22c749be35779c62f462a336589d4a519523a3e322a89794',
  port: 5432,
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  user: 'zqvvgugfuodmdv',
  host: 'ec2-54-157-15-228.compute-1.amazonaws.com',
  database: 'devdjo4brjpsh2',
  password: '0c0bef954f1cdb1b22c749be35779c62f462a336589d4a519523a3e322a89794',
  port: 5432,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})