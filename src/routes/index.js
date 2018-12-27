'use strict';

module.exports.register = async server => {
  server.route({
    method: 'GET',
    path: '/',
    handler: async (request, h) => {
      try {
        return h.view('home');
      } catch (err) {
        server.log(['error', 'home'], err);
      }
    },
  });
};
