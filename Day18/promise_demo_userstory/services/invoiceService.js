// services/invoiceService.js
async function generateInvoice(paymentInfo) {
    console.log("3 Generating invoice using async/await...");

    return {
        invoiceId: "INV" + Date.now(),
        paymentDetails: paymentInfo,
        date: new Date().toISOString()
    };
}

module.exports = { generateInvoice };
