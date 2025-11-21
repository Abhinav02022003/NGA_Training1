// mockDatabase.js

const orders = {
    1: { id: 1, item: "Burger", price: 150 },
    2: { id: 2, item: "Pizza", price: 300 },
};

function getOrderFromDB(orderId, callback) {
    // simulate delay of 2 seconds
    setTimeout(() => {
        const order = orders[orderId];

        if (!order) {
            callback("Order not found in the database", null);
            return;
        }

        callback(null, order);
    }, 2000);
}

module.exports = getOrderFromDB;
