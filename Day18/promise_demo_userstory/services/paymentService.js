// services/paymentService.js
function processPayment(order) {
    console.log("2️ Processing payment using Promise...");

    return new Promise((resolve, reject) => {
        if (order.amount > 0) {
            resolve({
                status: "Success",
                transactionId: "TXN" + Date.now(),
                amount: order.amount
            });
        } else {
            reject("Payment failed: invalid order amount");
        }
    });
}

module.exports = { processPayment };
