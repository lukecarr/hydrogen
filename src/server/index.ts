import fastify, { FastifyInstance } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import sql from "./sql";

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
  logger: true
});

server.register(sql, {
  uri: process.env.DSN || ""
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

process.on("SIGINT", () => {
  server.close().then(() => {
    process.exit();
  });
});

start();
