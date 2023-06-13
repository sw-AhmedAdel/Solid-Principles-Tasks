class Payment {
  constructor(amount) {
    this.amount = amount;
  }
}

class PaymentProcessor {
  constructor(payment) {
    this.payment = payment;
  }
  processPayment() {}
}

class PaypalPaymentProcessor extends PaymentProcessor {
  constructor(payment) {
    super(payment);
  }
  processPayment() {
    console.log(`Using Paypal: ${this.payment.amount}`);
  }
}

class StripePaymentProcessor extends PaymentProcessor {
  constructor(payment) {
    super(payment);
  }
  processPayment() {
    console.log(`Using Stripe: ${this.payment.amount}`);
  }
}

class Pay {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }
  pay() {
    this.paymentProcessor.processPayment();
  }
}

const payment = new Payment(50);
const paypalPaymentProcessor = new PaypalPaymentProcessor(payment);
const stripePaymentProcessor = new StripePaymentProcessor(payment);

const pay1 = new Pay(stripePaymentProcessor);
const pay2 = new Pay(paypalPaymentProcessor);

pay1.pay(); // Output: Using Stripe: 50
pay2.pay(); // Output: Using Paypal: 50

/*
 Using another way for implementation 
 
class Payment {
  constructor(amount) {
    this.amount = amount;
  }
  PaymentProcess() {}
}

class Paypal extends Payment {
  constructor(amount) {
    super(amount);
  }
  PaymentProcess() {
    console.log(`using Paypal: ${this.amount}`);
  }
}

class Stripe extends Payment {
  constructor(amount) {
    super(amount);
  }
  PaymentProcess() {
    console.log(`using Stripe: ${this.amount}`);
  }
}

class Pay {
  constructor(payment) {
    this.payment = payment;
  }
  pay() {
    this.payment.PaymentProcess();
  }
}

const payUsingStripe = new Stripe(50);
const payUsingPaypal = new Paypal(20);
const pay1 = new Pay(payUsingStripe);
const pay2 = new Pay(payUsingPaypal);
pay1.pay(); // Output : using Stripe: 50
pay2.pay(); // Output : using Paypal: 20
*/
