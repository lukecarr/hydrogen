import fastify, { FastifyInstance } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import config from "./config";
import sql from "./sql";

/**
 * Starts the Hydrogen server.
 * 
 * @param {string} configFile The path to the Hydrogen configuration file.
 * 
 * @since 0.1.0-rc.1
 * @author Luke Carr
 */
export default (configFile: string): void => {
  const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
    logger: true
  });
  
  server.register(config, {
    filename: configFile
  });
  server.register(sql);
  
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
};
