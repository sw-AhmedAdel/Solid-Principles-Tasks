# Open Closed Principle Example

# Introduction:
This project demonstrates an example implementation of the Open Closed Principle.

# Technologies Used:

    Node.js
    Simulating MongoDB (via Mongoose) 

# Features:
The codebase consists of the following files and classes:

    User Schema and Model: Defines the schema and model for a user in a MongoDB database using Mongoose.

    Data Source A: Contains a function called generateData that generates data for a specific data source using the User database.

    Interface Report Class: Defines the generateReport method as an interface that other report classes should implement.

    PDF Report Class: Implements the generateReport method to generate a PDF report based on the data from Data Source A.

    Excel Report Class: Implements the generateReport method to generate an Excel report based on the data from Data Source A.

    Generate Report Class: Combines the PDF and Excel report generation logic by utilizing the report classes. It accepts data from Data Source A and generates both PDF and Excel reports accordingly.

    Report-Generator.js: The generateReport function in generate-report.js executes the code for generating reports. It uses the generateReport method from the Generate Report class to generate PDF and Excel report data.
    
    so if we want to add another report like sheet repoer we can create a sheet class and extend from the Interface Report Class and in the Generate Report Class we call the sheet class.
    
 # Getting Started
The project is to demonstrates an example implementation of the Open Closed Principle. 
