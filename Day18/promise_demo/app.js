const { getUser } = require("./services/userService");

console.log("Fetching user...");

getUser()
    .then(user => {
        console.log("User fetched successfully:");
        console.log(user);
    })
    .catch(error => {
        console.log("Failed to fetch user:");
        console.log(error);
    });
