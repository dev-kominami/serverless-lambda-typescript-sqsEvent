import 'source-map-support/register';

import { middyfy } from '@libs/lambda';

import AWS from 'aws-sdk';
const sqs = new AWS.SQS()

const pushEvent = async (event) => {
  console.log(event);
  console.log(AWS);
  console.log(sqs);
}

export const main = middyfy(pushEvent);
