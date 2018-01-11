'use strict'

const debug = require('debug')('platziverse:db:setup')
const db = require('./')

async function setup () {
  const config = {
    database: process.env.DB_NAME || 'dbplatziverse',
    username: process.env.DB_USER || 'homestead',
    password: process.env.DB_PASS || 'secret',
    host: process.env.DB_HOST || '192.168.10.10',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: true
  }
  await db(config).catch(handleFatalError)

  console.log('Success!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
}

setup()
