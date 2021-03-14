import type { AWS } from '@serverless/typescript';

import sqsPushEvent from '@functions/sqsPushEvent';
import sqsTrriger from '@functions/sqsTrriger';

const serverlessConfiguration: AWS = {
  service: 'sqs-event',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
    env: {
      sqsQuereUrl: "${file(./src/slscnf/${self:provider.stage}.yml):sqsQuereUrl}",
      sqsQuereArn: "${file(./src/slscnf/${self:provider.stage}.yml):sqsQuereArn}"
    }
  },
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'ap-northeast-1',
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { 
    sqsPushEvent,
    sqsTrriger
  },
};

module.exports = serverlessConfiguration;
