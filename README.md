Here is a README.md file for your GitHub repository:

markdown
Copy code
# Node.js Authentication System with JWT and PostgreSQL

This repository contains a basic authentication system built with Node.js, Express, and PostgreSQL, using JWT (JSON Web Token) for securing endpoints. The system includes user registration, login functionalities, and a protected profile endpoint.

## Features

- User registration with hashed passwords using bcrypt.js
- User login with JWT generation
- Protected profile endpoint accessible only with a valid JWT
- PostgreSQL database integration

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- Supabase account (for managed PostgreSQL database)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
Install the dependencies:
sh
Copy code
npm install
Set up your environment variables. Create a .env file in the root of your project and add the following:
env
Copy code
PORT=3000
SUPABASE_DB_CONNECTION_STRING=postgres://postgres.krnfgpmvvrvdvecqonsw:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres
JWT_SECRET=your_jwt_secret
Replace [YOUR-PASSWORD] and your_jwt_secret with your actual Supabase database password and your JWT secret.

Ensure your PostgreSQL database has the required users table. You can create it with the following SQL:
sql
Copy code
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100)
);
Running the Application
Start the server:

sh
Copy code
npm start
The server will run on http://localhost:3000.

API Endpoints
POST /auth/register: Register a new user.

Request body:
json
Copy code
{
  "name": "Your Name",
  "email": "your.email@example.com",
  "password": "yourpassword"
}
POST /auth/login: Login a user and return a JWT.

Request body:
json
Copy code
{
  "email": "your.email@example.com",
  "password": "yourpassword"
}
GET /auth/profile: Retrieve the logged-in user's profile information (protected endpoint).

Requires a valid JWT in the Authorization header: Bearer your_jwt_token.
Project Structure
lua
Copy code
.
├── config
│   └── db.mjs
├── controller
│   └── authController.mjs
├── middleware
│   └── authMiddleware.mjs
├── models
│   └── userModel.mjs
├── routes
│   └── authRoutes.mjs
├── .env
├── app.mjs
├── package.json
└── README.md
Code Overview
config/db.mjs: Configures and connects to the PostgreSQL database.
controller/authController.mjs: Handles user registration, login, and profile retrieval.
middleware/authMiddleware.mjs: Middleware to authenticate JWT and protect routes.
models/userModel.mjs: Contains functions for interacting with the database.
routes/authRoutes.mjs: Defines authentication-related routes.
app.mjs: Main application file to set up Express server and routes.
Dependencies
express
pg
bcryptjs
jsonwebtoken
dotenv
body-parser
Development
For development, you can use nodemon to automatically restart the server on code changes:

sh
Copy code
npm install -g nodemon
nodemon app.mjs
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.
