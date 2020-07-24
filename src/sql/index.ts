import plugin from "fastify-plugin";
import { createPool, DatabasePoolType, sql } from "slonik";

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
 * To test the connection, `SELECT 1` is queries on the database immediately after the
 * connection pool is initialized.
 * 
 * The `pool.end()` method should be invoked at the end of Hydrogen's lifecycle
 * to end all idle connections and prevent creation of new ones. However, `pool.end()`
 * does not terminate active connections/transactions.
 * 
 * @since 0.1.0-rc.1
 * @author Luke Carr
 */
export default plugin(async (fastify) => {
  fastify.decorate("sql", createPool(fastify.config.SQL_DSN));
  
  try {
    await fastify.sql.query(sql`SELECT 1`);
    fastify.log.info("Connection established with PostgreSQL successfully!");
  } catch (error) {
    fastify.log.error("Unable to establish a connection with PostgreSQL!", error);
    process.exit(1);
  }
  
  fastify.addHook("onClose", (instance, done) => {
    instance.sql.end().then(() => {
      done();
    });
  });
});
