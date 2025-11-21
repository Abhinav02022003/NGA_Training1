// app.js
const { getOrder } = require("./services/orderService").default;
const { processPayment } = require("./services/paymentService");
const { generateInvoice } = require("./services/invoiceService");

console.log("Starting Order → Payment → Invoice Flow\n");

// 1) CALLBACK → retrieve order
getOrder((err, order) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Order Retrieved:", order);

    // 2) PROMISE → process payment
    processPayment(order)
        .then(paymentResult => {
            console.log("Payment Processed:", paymentResult);

            // 3) ASYNC/AWAIT → generate invoice
            return generateInvoice(paymentResult);
        })
        .then(invoice => {
            console.log("\n Final Invoice Generated:");
            console.log(invoice);
        })
        .catch(error => {
            console.log(error);
        });
});
