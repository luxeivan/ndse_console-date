import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { DateTime } from "luxon";
const argv = yargs(hideBin(process.argv))
  .option("year", {
    alias: "y",
    type: "boolean",
    description: "Год",
    default: false,
  })
  .option("month", {
    alias: "m",
    type: "boolean",
    description: "Месяц",
    default: false,
  })
  .option("date", {
    alias: "d",
    type: "boolean",
    description: "День",
    default: false,
  }).argv;
let date = DateTime.now();
let difference = 0;
if (argv._[0] === "add") {
  difference += argv._[1];
} else if (argv._[0] === "sub") {
  difference -= argv._[1];
}
if (argv._[0] === "current" && argv.year) {
  console.log(date.c.year);
} else if (argv._[0] === "current" && argv.month) {
  console.log(date.c.month);
} else if (argv._[0] === "current" && argv.date) {
  console.log(date.c.day);
} else if ((argv._[0] === "add" || argv._[0] === "sub") && argv.month) {
  console.log(date.plus({ month: difference }).toLocaleString(DateTime.DATETIME_MED));
} else if ((argv._[0] === "add" || argv._[0] === "sub") && argv.date) {
  console.log(date.plus({ day: difference }).toLocaleString(DateTime.DATETIME_MED));
} else if (argv._[0] === "current") {
  console.log(date.toLocaleString(DateTime.DATETIME_MED));
}

