'use strict';

module.exports.hello = (event, context, callback) => {
  const apiKey = process.env.API_KEY;
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      data: [],
      apiKey,
      code: 200,
      message: 'Go Serverless v1.0! Your function executed successfully!'
    }),
  };

  callback(null, response);
};