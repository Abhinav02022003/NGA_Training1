const chalk = require("chalk");
const figlet = require("figlet");

figlet.text("Welcome to Node.js!", { font: "Standard" }, (err, data) => {
    if (err) {
        console.log("FIGLET ERROR:", err);
        return;
    }

    console.log(chalk.green(data));
});
