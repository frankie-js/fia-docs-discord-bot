import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";

// eslint-disable-next-line @typescript-eslint/require-await
async function lambdaHandler(
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  console.log(`Event: ${JSON.stringify(event, null, 2)}`);
  console.log(`Context: ${JSON.stringify(context, null, 2)}`);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "hello world"
    })
  };
}

export { lambdaHandler };
