# Prismic Staging/Production Configuration Boilerplate

An example of how to set up staging and production environments with your Prismic.io CMS.

## Getting Started

### Project Setup
`npm install`

### Environment Configuration
This project uses `dotenv` to manage environment variables. Add a `.env` file and copy and paste the template below:
```
NODE_ENV=
PORT=
PRISMIC_IO_API_ENDPOINT=
PRISMIC_IO_ACCESS_TOKEN=
PRISMIC_IO_STAGING_RELEASE_NAME=
```

Fill out the environment variables  with the proper configuration. Example: `PORT=7000`.

### Start server
`npm start`
