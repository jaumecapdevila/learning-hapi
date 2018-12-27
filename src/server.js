'use strict';

const app = require('./config');

const port = 8080;
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
