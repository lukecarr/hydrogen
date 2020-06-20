import Vorpal from "vorpal";
import migrate from "./commands/migrate";

const cli = new Vorpal();

migrate(cli);

cli.delimiter("hydrogen$").show();
