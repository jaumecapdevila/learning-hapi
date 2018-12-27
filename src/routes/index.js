'use strict';

module.exports.register = async server => {
  server.route({
    method: 'GET',
    path: '/',
    handler: () => {
      return 'My first hapi server!';
    },
  });
};
