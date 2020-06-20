import fastify, { FastifyInstance } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
  logger: true
});

server.get("/", async () => {
  return "Hello World!";
});

const start = async () => {
  try {
    await server.listen(3000);
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
