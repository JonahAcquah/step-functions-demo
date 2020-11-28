'use strict';

module.exports.hello = async event => {
  console.log('doing it........')
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.hello2 = async event => {
  console.log('doing it 2........')
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.engineStart = async event => {
  const aws = require('aws-sdk')
  var params = {
    stateMachineArn: process.env.statemachine_arn,
    input: JSON.stringify({})
  }

  const stepfunctions = new aws.StepFunctions()
  stepfunctions.startExecution(params, function (err, data) {
    if (err) {
      console.log('err while executing step function')
    } else {
      console.log('started execution of step function')
    }
  })
};
