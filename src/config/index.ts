import plugin from "fastify-plugin";
import fs from "fs";
import { flatten } from "./util";
import defaults from "./defaults";

declare module "fastify" {
  interface FastifyInstance {
    config: {
      "SQL_DSN": string;
    };
  }
}

/**
 * Loads a JSON configuration from a file into the Fastify namespace under the `config`
 * property.
 * 
 * Configuration value keys found in the JSON file are 'flattened' (with `_` used as a
 * delimiter) and converted to uppercase. For example, the nested configuration value
 * `sql.dsn` would be flattened to `SQL_DSN` and accessible at
 * `fastify.config["SQL_DSN"]`.
 * 
 * Any environment variables found in the `process.env` object will override values loaded
 * from the configuration file.
 * 
 * @param {string} filename The name of the configuration file to load into memory.
 * 
 * @returns {Promise<void>} When the configuration file has loaded successfully.
 * 
 * @since 0.1.0
 * @author Luke Carr
 * 
 * @async
 */
export default plugin(async (fastify, options: { filename?: string }) => {
  fastify.log.debug("Registering config plugin...");

  const config: Record<string, unknown> = {};

  for (let i = 0; i < Object.entries(defaults).length; i += 1) {
    const [key, value] = Object.entries(defaults)[i];
    config[key] = defaults[key].transform !== undefined
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      ? defaults[key].transform!(value.default) : value.default;
    if (Object.prototype.hasOwnProperty.call(process.env, key)) {
      config[key] = defaults[key].transform !== undefined 
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        ? defaults[key].transform!(String(process.env[key])) : process.env[key];
    }
  }

  if (options.filename !== undefined) {
    fastify.log.debug("Config filename provided! Loading from file...");
    Object.assign(config,
      flatten(JSON.parse(await fs.promises.readFile(options.filename, "utf-8"))));
    fastify.log.debug("Loaded config from file using provided filename.");
  }

  fastify.decorate("config", config);
  fastify.log.debug("Decorated Fastify instance with config object.");
  
  fastify.log.debug("Registered config plugin successfully.");
});