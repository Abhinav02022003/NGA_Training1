const moment = require("moment");

const name = process.argv[2];

if (!name) {
    console.log("❗ Please provide your name: node greet.js John");
    process.exit(1);
}

const currentDateTime = moment().format("ddd MMM DD YYYY, h:mm A");

console.log(`Hello, ${name}! Today is ${currentDateTime}`);
