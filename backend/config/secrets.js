'use strict';

var _ = require('lodash');

var mysqlDB;
if (process.env.APP_PLATFORM === 'aws') {
  if (process.env.NODE_ENV === 'development') {
    mysqlDB = process.env.DB_HOST_DEVELOPMENT;
  } else {
    mysqlDB = process.env.DB_HOST_PRODUCTION;
  }
} else {
    mysqlDB = process.env.DB_HOST_LOCAL;
}




module.exports = {

  db:                             mysqlDB,
//   TOKEN_SECRET:                   process.env.TOKEN_SECRET,
//   CLOUDINARY_API_KEY:             process.env.CLOUDINARY_API_KEY,
//   CLOUDINARY_API_SECRET:          process.env.CLOUDINARY_API_SECRET,
//   CLOUDINARY_URL:                 process.env.CLOUDINARY_URL,
//   CLOUDINARY_TOKEN_KEY:           process.env.CLOUDINARY_TOKEN_KEY,
//   CLOUDINARY_VIDEO_UPLOAD_PRESET: process.env.CLOUDINARY_VIDEO_UPLOAD_PRESET,
//   CLOUDINARY_IMAGE_UPLOAD_PRESET: process.env.CLOUDINARY_IMAGE_UPLOAD_PRESET,
//   YOUTUBE_CLIENT_ID:              process.env.YOUTUBE_CLIENT_ID,
//   YOUTUBE_API_KEY:                process.env.YOUTUBE_API_KEY,
//   YOUTUBE_CLIENT_SECRET:          process.env.YOUTUBE_CLIENT_SECRET,
//   ROLLBAR_SERVER_ACCESSTOKEN:     extractFromEnv('ROLLBAR_SERVER_ACCESSTOKEN'),
//   ROLLBAR_CLIENT_ACCESSTOKEN:     extractFromEnv('ROLLBAR_CLIENT_ACCESSTOKEN'),


  validateEnvironment: function() {
    var envVariables = [
    //   'TOKEN_SECRET', 
      'DB_HOST_LOCAL', 
      'DB_HOST_DEVELOPMENT', 
      'DB_HOST_PRODUCTION', 
    //   'CLOUDINARY_API_KEY',
    //   'CLOUDINARY_API_SECRET', 
    //   'CLOUD_NAME', 
    //   'CLOUDINARY_URL',
    //   'CLOUDINARY_VIDEO_UPLOAD_PRESET', 
    //   'CLOUDINARY_IMAGE_UPLOAD_PRESET',
    //   'CLOUDINARY_TOKEN_KEY', 
    //   'YOUTUBE_CLIENT_ID', 
    //   'YOUTUBE_API_KEY',
    //   'YOUTUBE_CLIENT_SECRET',
    ];

    _.forEach(envVariables, function(v) {
      if (!process.env[v]) {
        throw new Error(v + ' environment variable is not defined');
      }
    });
  }
};

function extractFromEnv (variableName){
  return process.env[variableName];
}



