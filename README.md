# MERN Stack Registration and Retrieval Application

[cite_start]This project is a simple web application for user registration and retrieval built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js)[cite: 3]. [cite_start]It serves as a step-by-step guide for beginners to learn how to create a full-stack application[cite: 6].

---

## Features

* [cite_start]**Registration Page**: Users can submit their name and email address[cite: 4].
* [cite_start]**Retrieval Page**: Displays a list of all registered users from the database[cite: 5].
* [cite_start]**MongoDB Integration**: Stores user data securely in a MongoDB Atlas cloud database[cite: 11, 63].

---

## Technologies Used

* [cite_start]**React.js**: For building the user interface on the frontend[cite: 8].
* [cite_start]**Node.js**: The runtime environment for the backend[cite: 9].
* [cite_start]**Express.js**: Used to manage backend routes and the server[cite: 10].
* [cite_start]**MongoDB Atlas**: A cloud-based database service for data storage[cite: 11].
* [cite_start]**Mongoose**: An Object Data Modeling (ODM) library used to connect the Node.js backend with MongoDB[cite: 12].
* [cite_start]**NPM**: The package manager for installing project dependencies[cite: 13].
* [cite_start]**VS Code**: The integrated development environment (IDE) used for development[cite: 14].

---

## Getting Started

### Step 1: Project Setup

[cite_start]Create a main project folder, for example, `registration-app`[cite: 17]. [cite_start]Inside, create two sub-folders: `backend` for the server code and `frontend` for the React application[cite: 18, 19, 20].

### Step 2: MongoDB Atlas Setup

1.  [cite_start]Sign up for a free account on the MongoDB Atlas website[cite: 22].
2.  [cite_start]Create a new free cluster and a database user with a username and password[cite: 23, 24].
3.  [cite_start]Whitelist your IP address to allow a connection to the database[cite: 25].
4.  [cite_start]Copy the provided connection string; it's needed to connect your backend to the database[cite: 26].

### Step 3: Backend Configuration (Node.js + Express)

1.  [cite_start]Navigate to the `backend` folder in your terminal and open it in VS Code[cite: 28].
2.  [cite_start]Initialize a new Node.js project by running `npm init`[cite: 29].
3.  [cite_start]Install the necessary packages: `express`, `mongoose`, `cors`, and `nodemon`[cite: 31, 32, 33, 34].
4.  [cite_start]Create a main file (e.g., `server.js`) and connect to MongoDB Atlas using the connection string you copied[cite: 35, 36]. [cite_start]Replace the `<username>` and `<password>` with your database user details[cite: 37].
5.  [cite_start]Define a **User schema** with `Name` and `Email` fields[cite: 38].
6.  [cite_start]Create a **POST** route to save user details and a **GET** route to retrieve all registered users[cite: 39, 40, 41].
7.  [cite_start]Run the backend server using `nodemon` to ensure there are no errors[cite: 42].

### Step 4: Frontend Configuration (React.js)

1.  [cite_start]In the main folder, create a React app inside the `frontend` folder[cite: 44].
2.  [cite_start]Start the React development server to verify it's working[cite: 45].
3.  [cite_start]Create a form with input fields for `Name` and `Email` and a submit button[cite: 46].
4.  [cite_start]Add a section below the form to display the list of registered users[cite: 47].
5.  [cite_start]Implement API calls to connect the frontend to the backend: a **POST** request to send form data and a **GET** request to retrieve the list of users[cite: 48, 49, 50].

---

## How to Run

1.  [cite_start]Ensure both your backend (e.g., on port 5000) and frontend (e.g., on port 3000) servers are running[cite: 52, 53].
2.  [cite_start]Open the frontend application in your browser[cite: 57].
3.  [cite_start]Enter a name and email in the form and click register[cite: 58].
4.  [cite_start]Verify that the new user is stored in your MongoDB Atlas database and appears on the retrieval list on the frontend[cite: 59, 60].

---

## Future Enhancements

* [cite_start]Add functionality for **Update** and **Delete** operations to achieve full CRUD (Create, Read, Update, Delete) functionality[cite: 71].
* [cite_start]Implement form validation and user authentication[cite: 72].
* [cite_start]Deploy the project online for real users[cite: 73].
