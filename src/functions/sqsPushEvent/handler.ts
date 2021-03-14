import 'source-map-support/register';

import { middyfy } from '@libs/lambda';

const pushEvent = async (event) => {
  console.log(event);
}

export const main = middyfy(pushEvent);
