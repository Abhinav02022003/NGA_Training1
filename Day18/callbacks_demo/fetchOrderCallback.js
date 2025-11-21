// fetchOrderCallback.js

const getOrderFromDB = require("./mockDatabase");

// fetch order using callback
function fetchOrder(orderId, callback) {
    console.log("Fetching order...");

    getOrderFromDB(orderId, (error, data) => {
        if (error) {
            callback(error, null);
            return;
        }

        callback(null, data);
    });
}

module.exports = fetchOrder;
