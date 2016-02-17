'use strict';
const Prismic = require('prismic.io');

const getEnvironment = (api) => {
  if (process.env.NODE_ENV !== 'staging') {
    return api.master();
  }

  const stagingReleaseRef =
    api.ref(process.env.PRISMIC_IO_STAGING_RELEASE_NAME);

  if (stagingReleaseRef) {
    return stagingReleaseRef;
  } else {
    return api.master();
  }
};

exports.getAPI = () => Prismic.api(
  process.env.PRISMIC_IO_API_ENDPOINT,
  process.env.PRISMIC_IO_ACCESS_TOKEN
);
exports.getEnvironment = getEnvironment;
