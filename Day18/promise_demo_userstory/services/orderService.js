// services/orderService.js
import { readFile } from "fs";

function getOrder(callback) {
    console.log("1️ Starting order retrieval (Callback)...");

    readFile("./data/order.json", "utf8", (err, data) => {
        if (err) {
            callback("Failed to read order file", null);
        } else {
            callback(null, JSON.parse(data)); // pass order to next step
        }
    });
}

export default { getOrder };
