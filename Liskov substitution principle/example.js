class Payment {
  pay(amount) {
    throw new Error("Method not implemented");
  }
}

// Cash payment class inheriting from Payment
class CashPayment extends Payment {
  pay(amount) {
    // Add tax of 10 pounds for cash payment
    const totalAmount = amount + 10;
    console.log(`Paid ${totalAmount} pounds in cash`);
  }
}

// Credit payment class inheriting from Payment
class CreditPayment extends Payment {
  pay(amount) {
    console.log(`Paid ${amount} pounds by credit card`);
  }
}

// Usage example
function makePayment(paymentMethod, amount) {
  paymentMethod.pay(amount);
}

const cashPayment = new CashPayment();
const creditPayment = new CreditPayment();

makePayment(cashPayment, 100); // Output: Paid 110 pounds in cash
makePayment(creditPayment, 100); // Output: Paid 100 pounds by credit card
