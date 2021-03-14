import 'source-map-support/register';

import { middyfy } from '@libs/lambda';

import AWS from 'aws-sdk';
const sqs = new AWS.SQS()

const url = process.env.sqsQuereUrl;

const pushEvent = async (event) => {
  console.log(event);
  const param: AWS.SQS.SendMessageRequest = {
    MessageBody: JSON.stringify(event),
    QueueUrl: url,
    MessageDeduplicationId: "dedup_2",
    MessageGroupId: "group_2"
  }

  sqs.sendMessage(param, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
  })
}

export const main = middyfy(pushEvent);
