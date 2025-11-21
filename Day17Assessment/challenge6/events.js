const EventEmitter = require("events");

const event = new EventEmitter();

event.on("userLoggedIn", (user) => {
    console.log(`User ${user} logged in.`);
});

event.on("userLoggedOut", (user) => {
    console.log(`User ${user} logged out.`);
});

// Bonus event
event.on("sessionExpired", (user) => {
    console.log(`Session expired for ${user}`);
});

// Emit events
event.emit("userLoggedIn", "Abhinav");
event.emit("userLoggedOut", "Abhinav");

setTimeout(() => {
    event.emit("sessionExpired", "Abhinav");
}, 5000);
