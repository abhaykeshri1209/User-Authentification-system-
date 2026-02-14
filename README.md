🔐 MERN Stack User Authentication System

A full-stack User Authentication system built using the MERN Stack — MongoDB, Express.js, React.js, and Node.js.

This project allows users to:

Register an account

Login securely

Store authentication token

Access protected routes

Logout functionality...


  🚀 Tech Stack

Frontend: React.js

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT (JSON Web Token)

Password Hashing: bcrypt

HTTP Client: Axios




✨ Features

🔐 Secure User Registration

🔑 Login with JWT Authentication

🔒 Protected Routes

🛡 Password Hashing with bcrypt

💾 MongoDB Database Integration

📦 REST API Architecture

🧾 Token stored in LocalStorage




🧠 How Authentication Works

User registers → Password is hashed using bcrypt.

User logs in → Server verifies credentials.

Server generates JWT token.

Token is stored in localStorage.

Token is sent in Authorization header for protected routes.

Middleware verifies token before granting access.



🌍 Future Improvements

Add Refresh Tokens

Add Email Verification

Add Forgot Password Feature

Deploy to Render / Vercel / Railway

Add Role-Based Authentication

🤝 Contributing

Contributions are welcome!
Feel free to fork this repository and submit pull requests.


👨‍💻 Author

Abhay Keshri
