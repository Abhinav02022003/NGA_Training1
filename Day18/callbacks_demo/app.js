// app.js

const fetchOrder = require("./fetchOrderCallback");

// success example
fetchOrder(1, (error, order) => {
    if (error) {
        console.log("Error:", error);
        return;
    }
    console.log("Order fetched successfully:", order);
});

// failure example
fetchOrder(99, (error, order) => {
    if (error) {
        console.log("Error:", error);
        return;
    }
    console.log("Order fetched successfully:", order);
});
