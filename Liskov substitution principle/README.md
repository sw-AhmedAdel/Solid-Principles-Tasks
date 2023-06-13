# Liskov Substitution Principle Example

# Introduction:
This project demonstrates an example implementation of the Liskov Substitution Principle 

# Technologies Used:

    Node.js

# Features:
The codebase includes the following classes:

    Payment: This is an interface class that defines the basic structure for payment methods. It includes a pay method that throws an error since it should be implemented in derived classes.

    CashPayment: This class inherits from the Payment class and implements the pay method. It adds a tax of 10 pounds to the payment amount and logs the payment details.

    CreditPayment: This class also inherits from the Payment class and implements the pay method. It logs the payment details without any additional tax.

    makePayment: This function demonstrates the usage of the payment classes. It accepts a payment method and an amount, and calls the pay method of the provided payment method.
    
    
# Getting Started

To run the project, follow these steps:

    Clone the repository: git clone https://github.com/sw-AhmedAdel/Solid-Principles-Tasks/tree/main/Liskov%20substitution%20principle
    Navigate to the project directory: cd Dependency Inversion Principle
    Run the example code: node exm.js

Ensure that you have Node.js installed on your PC before running the project.

