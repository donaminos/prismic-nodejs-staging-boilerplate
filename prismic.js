'use strict';
const Prismic = require('prismic.io');

const getEnvironment = (api) => {
  if (process.env.NODE_ENV !== 'staging') {
    return api.master();
  }

  return api.ref(process.env.PRISMIC_IO_STAGING_RELEASE_NAME) || api.master();
};

exports.getAPI = () => Prismic.api(
  process.env.PRISMIC_IO_API_ENDPOINT,
  process.env.PRISMIC_IO_ACCESS_TOKEN
);
exports.getEnvironment = getEnvironment;
