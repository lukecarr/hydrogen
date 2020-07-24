import fastify, { FastifyInstance } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import config from "./config";
import sql from "./sql";

/**
 * The main server responsible for serving Hydrogen LMS's core functionality.
 * 
 * @since 0.1.0-rc.1
 * @author Luke Carr
 */
export default class HydrogenServer {
  private fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>;

  /**
   * Instantiates a new instance of the Hydrogen LMS core server.
   * 
   * @param options Configurtion options to pass to Hydrogen.
   * 
   * @since 0.1.0-rc.1
   */
  public constructor(options: {
    config: string,
    logging?: boolean,
  }) {
    this.fastify = fastify({
      logger: options.logging || false,
    });
    
    Promise.all([
      this.fastify.register(config, {
        filename: options.config,
      }),
      this.fastify.register(sql),
    ]);

    this.registerRoutes();
  }

  /**
   * Registers Hydrogen's HTTP routes with Fastify.
   * 
   * @since 0.1.0-rc.1
   */
  private registerRoutes() {
    this.fastify.get("/", async () => "Hello World");
  }

  /**
   * Starts the Hydrogen LMS core server on port 3000.
   * 
   * @since 0.1.0-rc.1
   * @async
   */
  public async listen() {
    process.on("SIGINT", () => {
      this.fastify.close().then(() => process.exit());
    });

    try {
      await this.fastify.listen(3000);
    } catch (error) {
      this.fastify.log.error(error);
      process.exit(1);
    }
  }
}
