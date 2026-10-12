# Student Management System

A full-stack web application to manage student information using Angular, Spring Boot, and MySQL.

## Technologies Used

- **Frontend:** Angular 21
- **Backend:** Java, Spring Boot
- **Database:** MySQL
- **Build Tool:** Maven
- **API Testing:** Postman

## Project Structure

```text
student-management/
├── src/                           # Angular frontend
├── public/
├── package.json
├── angular.json
├── README.md
└── backend/
    ├── src/
    │   ├── main/
    │   │   ├── java/com/example/demo/
    │   │   │   ├── controllers/
    │   │   │   ├── models/
    │   │   │   ├── repository/
    │   │   │   └── services/
    │   │   └── resources/
    │   │       ├── application.properties
    │   │       └── schema.sql
    │   └── test/
    ├── pom.xml
    └── mvnw.cmd
```

## Features

- Add and manage student details
- View student records
- Update and delete student information
- Student dashboard
- MySQL database integration
- REST API integration with Angular

## Prerequisites

Install the following before running the project:

- Node.js and npm
- Angular CLI
- Java JDK compatible with the Spring Boot project
- MySQL Server
- MySQL Workbench (optional)

## Database Setup

1. Start your MySQL server.
2. Open MySQL Workbench.
3. Run the SQL script located at `backend/src/main/resources/schema.sql`.
4. Configure your MySQL connection in `backend/src/main/resources/application.properties`.

Set your database password through the `DB_PASSWORD` environment variable. Do not upload actual passwords or other secrets to GitHub.

## Run the Backend

Open PowerShell and navigate to the backend directory:

```powershell
cd backend
$env:DB_PASSWORD="your_mysql_password"
.\mvnw.cmd spring-boot:run
```

The backend starts on the port configured in the Spring Boot application.

## Run the Frontend

Open another terminal in the project root:

```powershell
npm install
ng serve
```

Open your browser at:

http://localhost:4200/

## Repository

GitHub: https://github.com/Geetha-45/student-management-system

## Author

Student Management System project built as a full-stack development project.
