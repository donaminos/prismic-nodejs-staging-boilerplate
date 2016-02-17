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

### Set up Quotes custom type for example endpoint
To use the example quotes logic, you need to set up a custom type in your Prismic CMS.
First, go into Settings > Custom Types, and set up your type like below:

![Prismic Custom Types Setup](http://i.imgur.com/MSOBTH0.jpg)

Add this JSON for the "Quotes" custom type below:
```
{
  "Main" : {
    "quote" : {
      "fieldset" : "Quote",
      "type" : "StructuredText",
      "config" : {
        "multi" : "paragraph,em,strong,hyperlink",
        "placeholder" : "Quote"
      }
    },
    "quotee" : {
      "fieldset" : "Quotee",
      "type" : "StructuredText",
      "config" : {
        "single" : "heading3",
        "placeholder" : "quotee"
      }
    }
  }
}
```

### Start server
`npm start`
