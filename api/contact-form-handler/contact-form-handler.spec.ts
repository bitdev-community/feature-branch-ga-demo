import { APIGatewayProxyEventV2 } from "aws-lambda";
import { handler } from "./contact-form-handler.handler";

it("Should retrieve a 403 response with empty body", async () => {
  expect.hasAssertions();
  const expected = {
    statusCode: 403,
    headers: { "Content-Type": "application/json" },
    body: '',
  };
  const response = await handler({
    requestContext: {
      http: {
        method: 'GET',
        path: '/api/unknown'
      }
    },
    body: ''
  } as APIGatewayProxyEventV2);
  expect(response).toStrictEqual(expected);
});

it("Should retrieve a 200 response with message body", async () => {
  expect.hasAssertions();
  const expected = {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: { message: `Thank you John for contacting me. I will get back to you shortly!` },
  };
  const response = await handler({
    requestContext: {
      http: {
        method: 'POST',
        path: '/api/contact-form-handler'
      }
    },
    body: JSON.stringify({ name: "John", email: "john@example.com" })
  } as APIGatewayProxyEventV2);
  expect(response).toStrictEqual(expected);
});
