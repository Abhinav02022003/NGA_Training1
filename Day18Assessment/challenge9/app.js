const fs = require("fs").promises;

async function copyFile() {
  try {
    const data = await fs.readFile("input.txt", "utf8");

    // Bonus: simulate slow operation
    await new Promise((res) => setTimeout(res, 1000));

    await fs.writeFile("output.txt", data);

    console.log("File copied successfully using async/await!");
  } catch (error) {
    console.error("Error:", error);
  }
}

copyFile();
