
#Dependency Inversion Principle Example

#Introduction
This project is an example implementation of the Dependency Inversion Principle using Node.js. It demonstrates how the principle can be applied to achieve flexible and decoupled code design.

#Technologies Used
The project is built using the following technologies:

    Node.js

#Features

    Payment class represents a payment with an amount.
    PaymentProcessor is an interface class that defines the contract for processing payments.
    PaypalPaymentProcessor and StripePaymentProcessor are concrete implementations of PaymentProcessor for processing payments using PayPal and Stripe, respectively.
    Pay class represents a payment transaction and depends on an instance of PaymentProcessor to process the payment.
    The code demonstrates the usage of dependency injection and polymorphism to decouple the payment processing logic from the Pay class, allowing for easy extensibility and interchangeable payment processors.

#Getting Started

To run the project, follow these steps:

    Clone the repository: git clone https://github.com/sw-AhmedAdel/Solid-Principles-Tasks/tree/main/Dependency%20Inversion%20Principle
    Navigate to the project directory: cd Dependency Inversion Principle
    Run the example code: node exm.js

Ensure that you have Node.js installed on your PC before running the project.
Conclusion

