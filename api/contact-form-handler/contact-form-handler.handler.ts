import { APIGatewayProxyEventV2 } from "aws-lambda";

/* Using APIGatewayProxyEventV2 @Type for function URL params */
export async function handler(
  event: APIGatewayProxyEventV2) {
  const { method } = event.requestContext.http;
  const { path } = event.requestContext.http;
  if (method === 'POST' && path === '/api/contact-form-handler') {
    const { name } = JSON.parse(event.body);
    /* TODO: store the other form data like email, subject, message */
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: { message: `Thank you ${name} for contacting me. I will get back to you shortly!` },
    };
  }

  return {
    statusCode: 403,
    headers: { "Content-Type": "application/json" },
    body: '',
  };
}
