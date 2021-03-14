import 'source-map-support/register';

import { middyfy } from '@libs/lambda';

import { SQSEvent } from 'aws-lambda'

const sqsTrriger = async (event: SQSEvent) => {
  event.Records.forEach(element => {
    console.log(element);
  });
}

export const main = middyfy(sqsTrriger);
