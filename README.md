# StudentAPI

A RESTful API built with Node.js, Express, and Mongoose for managing student records. This project provides full CRUD (Create, Read, Update, Delete) functionality for the Student entity.

## 🚀 Project Overview

This API is designed to handle all aspects of student data management, including persistence to a MongoDB Atlas database.

### Core Technologies

* **Node.js:** JavaScript runtime environment.
* **Express.js:** Web application framework for Node.js.
* **Mongoose:** MongoDB object modelling for Node.js (used for schema definition).
* **MongoDB Atlas:** Cloud-hosted NoSQL database.

### File Structure

The project follows a standard M-R-S (Model-Route-Server) structure:

StudentAPI/├── Models/│   └── Student.js        # Mongoose Schema and Model definition├── Routes/│   └── Studentsroute.js  # Express routes (POST, GET, PUT, DELETE logic)├── node_modules/         # Dependencies installed via npm├── app.js                # Main server setup and database connection├── package.json          # Project dependencies and scripts└── README.md             # This file

## 🛠️ Setup and Installation

Follow these steps to get a copy of the project up and running on your local machine.

### Prerequisites

You must have the following installed:

* **Node.js** (v18 or higher recommended)
* **npm** (Node Package Manager)

### Step 1: Clone the Repository

```bash
git clone [ttps://github.com/HooriaRiazMemon/Student-Management-system-using-express-JS-and-APIS]
cd StudentAPI
Step 2: Install DependenciesInstall all required packages (express, mongoose, body-parser, cors) npm install
Step 3: Configure Database Connection application connects to MongoDB Atlas using a connection string in app.js.Open app.js.
Step 4: Run the ServerStart the application using the Node runtime.Bashnode app.js
The server will start running on port 5000. Server is running on port 5000
Connected to MongoDB Atlas
⚙️ API Endpoints API endpoints are accessible via the base URL: http://localhost:5000/apiMethodEndpointDescriptionDetailsPOST/api/StudentCreate a new student record. Requires JSON body matching the schema.GET/api/StudentRetrieve all student records. Returns an array of students.
PUT/api/Student/:idUpdate an existing student by ID.Requires the MongoDB _id in the path and a JSON body with fields to update.
DELETE/api/Student/:idDelete a student by ID.Requires the MongoDB _id in the path.
📚 Student Model Schema (./Models/Student.js)The following fields are required for every student record:
Field NameTypeConstraintsDescriptionnameStringrequired: trueThe full name of the student.
SemesterStringrequired: trueThe current semester (e.g., "Fall 2025").
AgeNumberrequired: trueThe student's age.
AddressStringrequired: trueThe student's physical address.
dateofBirthDaterequired: trueThe student's date of birth. (Sent as a string in JSON, e.g., "YYYY-MM-DD")
Example POST Request BodyUse this JSON structure when creating a new record: JSON{
    "name": "Ali Haider",
    "Semester": "Fall 2025", 
    "Age": 20,
    "Address": "House 45, Gulberg Town",
    "dateofBirth": "2005-08-15"
}
