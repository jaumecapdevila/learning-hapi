'use strict';

const Hapi = require('hapi');
const plugins = require('./plugins');
const routes = require('./routes');
const vision = require('vision');
const pug = require('pug');

module.exports.createServer = async config => {
  const server = Hapi.server(config);

  await server.register(vision);

  server.views({
    engines: { pug },
    relativeTo: __dirname,
    path: '../templates',
    layout: true,
  });

  // register plugins
  await plugins.register(server);

  // register routes
  await routes.register(server);

  return server;
};
