# Indeed Clone

## Overview
This project is an Indeed clone that replicates some of the core functionalities of the popular job search platform. It is implemented using React.js for the front end, Spring Boot for the backend, and MongoDB as the database. The front-end components are built with Material-UI for a clean and responsive user interface.

## Features
- **Job Search:** Users can search for job listings based on keywords, location, and other relevant criteria.
- **Job Posting:** Employers can post job openings, providing details such as job title, description, and application instructions.
- **User Authentication:** Secure user authentication and authorization mechanisms are implemented for both job seekers and employers.
- **Saved Jobs:** Registered users can save job listings for future reference.
- **Responsive Design:** The user interface is designed to be responsive and work seamlessly across various devices.

## Technologies Used
- **Front End:** React.js, Material-UI
- **Back End:** Spring Boot
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Deployment:** [Heroku](https://www.heroku.com/)

## Prerequisites
- Node.js and npm installed for the front-end development.
- Java and Maven installed for the back-end development.
- MongoDB installed locally or accessible MongoDB database.

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/asim-cyb1/Indeed-Clone.git
   cd indeed-clone

2. Front-end:
   ```bash
   cd client
   npm install
   npm start

3. Back-end:
   ```bash
   cd server
   mvn clean install
   java -jar target/indeed-clone-backend.jar

Access the application in your browser: http://localhost:3000

## Configuration
Update the MongoDB connection details in the application.properties file in the server directory.

## Deployment
This project can be deployed to platforms like Heroku. Make sure to configure the environment variables and settings accordingly.

## Contributing
Feel free to contribute to this project. Fork the repository, make your changes, and submit a pull request.
