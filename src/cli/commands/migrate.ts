import Vorpal from "vorpal";
import Postgrator from "postgrator";
import path from "path";

/**
 * Initializes the 'migrate' command with the Helium CLI.
 * 
 * This command is used to perform SQL migrations that are defined in the `./migrations`
 * directory (relative to the project root). The command takes a single argument, `DSN`,
 * which denotes the PostgreSQL connection string to use.
 * 
 * @param {Vorpal} vorpal The Vorpal instance to register the command with.
 * 
 * @since 0.1.0-rc.1
 * @author Luke Carr
 */
export default (vorpal: Vorpal): void => {
  vorpal.command("migrate <DSN>", "Runs SQL migrations for Hydrogen.")
    .alias("db:migrate")
    .action(async (args) => {
      try {
        const pg = new Postgrator({
          migrationDirectory: path.join(__dirname, "..", "..", "..", "migrations"),
          driver: "pg",
          connectionString: args.DSN
        });

        pg.on("migration-started", (migration) => {
          console.log(`Started ${migration.filename} migration...`);
        });
        pg.on("migration-finished", (migration) => {
          console.log(`Finished ${migration.filename} migration.`);
        });

        console.log(`Completed ${(await pg.migrate()).length} migrations!`);
      } catch (error) {
        console.error(error);
      }
    });
};
