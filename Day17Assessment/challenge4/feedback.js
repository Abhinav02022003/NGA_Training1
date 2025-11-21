const fs = require("fs").promises;

async function run() {
    const input = "Node.js is awesome!";
    
    try {
        await fs.writeFile("feedback.txt", input);
        console.log("Data written successfully.");

        console.log("Reading file...");
        const data = await fs.readFile("feedback.txt", "utf8");

        console.log(data);
    } catch (err) {
        console.error("Error:", err);
    }
}

run();
