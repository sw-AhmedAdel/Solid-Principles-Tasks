# Single Responsibility Principle Example: Email Service

# Introduction:
This project showcases an implementation of the Single Responsibility Principle 


# Technologies Used:

    Node.js
    Simulating MongoDB (via Mongoose) 

# Features:
    user.router.js: This file defines the routes related to user operations using the Express.js router. It imports the httpUpdateProfile function from the controller.js file and exposes the /updateProfile endpoint.

    user.mongo.js: This file contains the user schema definition using Mongoose. It defines the structure of the user document in the MongoDB collection, including fields such as name, email, and age. Additionally, it exports the User model.

    email.js: This file contains the Email class, which represents the email service responsible for sending emails. The class follows the Single Responsibility Principle by encapsulating the functionality of sending emails. It has a constructor that takes the recipient's name and email address as input and provides a sendEmail method to simulate sending an email.

    controller.js: This file exports the httpUpdateProfile function, which acts as the controller logic for updating the user profile. It retrieves the user ID and updated user data from the request, calls the updateProfile function (defined in the user.mongo.js module) to update the user profile, and sends an email notification using the Email class from email.js after a successful update.
# Getting Started
The project is to demonstrates an example implementation of the Single Responsibility Principle 
