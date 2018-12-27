'use strict';

require('dotenv').config();

const app = require('./config');

const DEFAULT_PORT = 8080;
const port = process.env.PORT || DEFAULT_PORT;
const config = { port };

const start = async () => {
  try {
    // create the server
    const server = await app.createServer(config);

    // start the server
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
