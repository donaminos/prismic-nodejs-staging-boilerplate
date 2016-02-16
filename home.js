'use strict';

const Prismic = require('./prismic');
const Predicates = require('prismic.io').Predicates;
const _ = require('lodash');

const getQuotes = (api) => api
    .form('everything')
    .ref(Prismic.getEnvironment(api))
    .query(Predicates.at('document.type', 'quotes'))
    .submit()
    .then((quotes) => {
      return _.map(quotes.results, (result) => {
        return _.map(result.data, (datum) => {
          return datum.value[0].text;
        });
      });
    });

const homeHandler = (request, reply) => {
  Prismic.getAPI().then((api) => {
    const stagingReleaseRef =
      api.ref(process.env.PRISMIC_IO_STAGING_RELEASE_NAME);
    getQuotes(api).then((quotes) => {
      reply.view('quotes', {
        quotes: quotes,
        environment: stagingReleaseRef ? 'Staging' : 'Production'
      });
    });
  });
};

module.exports = {
  method: 'GET',
  path: '/',
  handler: homeHandler
};
