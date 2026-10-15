# Full-Stack JWT Authentication System

A robust and secure full-stack user registration and login system built using the MERN ecosystem (**MongoDB, Express, React, Node.js**). This application implements secure user sessions using **JSON Web Tokens (JWT)** passed via HTTP headers to bypass modern cross-origin browser cookie restrictions on localhost.

## 🚀 Features

- **User Registration & Encryption:** Secure signup with automatic password hashing using `bcryptjs`.
- **JWT Authentication:** Stateful user session tokens with 3-day expirations.
- **Route Guarding:** Protected React home dashboard which automatically verifies token authenticity on mount.
- **Fail-Safe Navigation:** Direct browser window synchronization to guarantee immediate UI redirect states upon valid auth.
- **Real-time Feedback:** Inline context status alerts integrated via `react-toastify`.

## 📚 Credits & Acknowledgement

This authentication architecture was built by referencing official technical documentation guides for building full-stack secure token verification systems using Node.js and React Router DOM. Special thanks to the open-source community documentation for MERN authentication patterns.

## 🛠️ Tech Stack

- **Frontend:** React, React Router DOM v6, Axios, React Toastify, React Cookie
- **Backend:** Node.js, Express.js, MongoDB Atlas (Mongoose ODM), JSON Web Token, BcryptJS, CORS Middleware

## 🔧 Installation & Setup

### 1. Prerequisites

Ensure you have **Node.js** and **npm** installed on your local machine. You will also need a **MongoDB Atlas** cluster database string.

### 2. Backend Configuration

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install server dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend root directory and configure the environment variables:
   ```env
   PORT=4000
   MONGO_URL=your_mongodb_atlas_connection_string
   TOKEN_KEY=your_jwt_secret_token_string
   ```
4. Start the backend development server:
   ```bash
   npm start
   # or if using nodemon
   npm run dev
   ```

### 3. Frontend Configuration

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install client-side dependencies:
   ```bash
   npm install
   ```
3. Boot up the React web development client:
   ```bash
   npm start
   ```
4. Access the web interface running at `http://localhost:3000`.
