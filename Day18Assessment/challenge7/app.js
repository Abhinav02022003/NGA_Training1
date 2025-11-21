const fs = require("fs");

console.log("Starting read operation...");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    return console.error("Error reading file:", err);
  }

  console.log("File content:", data);

  // Bonus: intentional delay
  setTimeout(() => {
    console.log("Read operation completed");
  }, 1000);
});

console.log("This runs BEFORE file read (asynchronous behavior!)");
