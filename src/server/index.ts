import fastify from "fastify";

const server = fastify({
  logger: true
});

server.get("/", (req, reply) => {
  reply.send("Hello World!");
});

server.listen(3000);
