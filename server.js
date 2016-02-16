'use strict';

require('dotenv').config();

const Promise = require('bluebird');
const Hapi = Promise.promisifyAll(require('hapi'));
const Handlebars = require('handlebars');
const Vision = require('vision');

const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 7000 });

const routes = require('./routes');

server.register(Vision, (err) => {
  if (err) { throw err; }

  server.views({
    engines: {
      html: Handlebars
    },
    relativeTo: __dirname,
    path: 'views'
  });

  server.route(routes);
});

Promise.coroutine(function*() {
  yield server.startAsync();
  console.log('Server started at port ' + server.info.port);
})();
