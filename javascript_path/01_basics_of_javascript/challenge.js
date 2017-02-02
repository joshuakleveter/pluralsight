/**
 * Calculate the total price of a phone purchase.
 * 
 * - Keep purchasing phones until you run out of money.
 * - Buy accessories for each phone as long as the purchase
 *      amount is below your mental spending threshold.
 * - After purchase add the tax and pretty print the purchase amount.
 * - Finally, check the purchase amount against your bank balance
 *      to see if you can afford it.
 * - You should have constants for:
 *  - Tax rate
 *  - Phone price
 *  - Spending threshold
 *  - Accessory price
 * - You should have a var for bank balance.
 * - You should have functions for:
 *  - Tax calculation
 *  - Printing purchase total
 * - Ask user to input bank account balance.
 */

const ACCESSORY_PRICE = 19.99;
const PHONE_PRICE = 99.99;
const SPENDING_THRESHOLD = 199.99;
const TAX_RATE = 0.087;

var bankBalance = 12000;

function calculateTax(subtotal) {
    /**
     * Make sure that our tax has a max of two decimal places
     * and coerce back to a number with the unary + operator.
     */
    var tax = +Number.prototype.toFixed.call(subtotal * TAX_RATE, 2);
    return tax;
}

function printTotal(subtotal, tax, total) {
    console.log("Your subtotal is: $" + subtotal.toFixed(2));
    console.log("Your tax is: $" + tax.toFixed(2));
    console.log("Your total is: $" + total.toFixed(2));
}

var subtotal = 0;
do {
    subtotal += PHONE_PRICE;

    if (subtotal < SPENDING_THRESHOLD) {
        subtotal += ACCESSORY_PRICE;
    }
} while (subtotal < bankBalance);

var purchaseTax = calculateTax(subtotal);
var total = subtotal + purchaseTax;

printTotal(subtotal, purchaseTax, total);

if (total <= bankBalance) {
    console.log("Let's buy the phones!");
} else {
    console.log("That's too much... Oh well.");
}