import { PathItemObject, OperationObject, CallbackObject } from "openapi3-ts";
import { ref as subscriptionSchemaRef } from '../../components/schemas/subscription/message';
import { ref as sentMessageSchemaRef } from '../../components/schemas/message/whatsapp/sent';

const post: OperationObject = {
  description: 'Create a new callback subscription',
  tags: ['Subscriptions'],
  responses: {
    200: {
    }
  },
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: subscriptionSchemaRef,
        },
      },
    },
  },
  callbacks: {
    onMessage: {
      '/webhook': {
        post: {
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: sentMessageSchemaRef,
                }
              }
            }
          },
          responses: {
            '200': {
              description: 'webhook successfully processed and no retries will be performed',
            }
          }
        }
      } as PathItemObject,
    } as CallbackObject,
  }
};

const path: PathItemObject = {
  post,
};

export default path;