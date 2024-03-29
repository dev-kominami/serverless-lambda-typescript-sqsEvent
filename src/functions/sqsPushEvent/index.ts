import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  role: 'sqsPushRole',
  environment: {
    sqsQuereUrl: "${self:custom.env.sqsQuereUrl}"
  }
}
