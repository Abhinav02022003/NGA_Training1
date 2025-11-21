const fs = require("fs").promises;

function getUser() {
    return new Promise((resolve, reject) => {
        fs.readFile("./data/user.json", "utf8")
            .then(data => {
                resolve(JSON.parse(data));   // Success
            })
            .catch(err => {
                reject("Error reading user data: " + err);  // Failure
            });
    });
}

module.exports = { getUser };
