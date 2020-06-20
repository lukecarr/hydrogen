import plugin from "fastify-plugin";
import { createPool, DatabasePoolType } from "slonik";

declare module "fastify" {
  interface FastifyInstance {
    sql: DatabasePoolType;
  }
}

/**
 * Initializes a new PostgreSQL connection pool using Slonik and adds the connection pool
 * object to the Fastify namespace under the property `sql`.
 * 
 * This connection pool instance should now be used wherever an SQL query needs to be
 * executed.
 * 
 * The `pool.end()` method should be invoked at the end of Hydrogen's lifecycle
 * to end all idle connections and prevent creation of new ones. However, `pool.end()`
 * does not terminate active connections/transactions.
 * 
 * @since 0.1.0
 * @author Luke Carr
 */
export default plugin(async (fastify, options) => {
  fastify.decorate("sql", createPool(options.uri));
  fastify.addHook("onClose", (instance, done) => {
    instance.sql.end().then(() => {
      done();
    });
  });
});
