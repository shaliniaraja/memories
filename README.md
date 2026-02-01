# Memories – MERN Stack Application

Memories is a full-stack MERN application that allows users to create, view, like, edit, and delete posts with images.  
The application includes secure authentication using JWT and Google OAuth, ensuring protected access to features.

---

##  Features

- User authentication using **JWT**
- **Google OAuth** login support
- Create, edit, and delete posts (only by post creator)
- Like / Unlike posts (one like per user)
- Image upload support (Base64)
- Protected backend routes using authentication middleware
- Responsive UI built with **Material UI (MUI v5)**
- Global state management using **Redux**

---

## 🛠 Tech Stack

### Frontend
- React
- Redux & Redux Thunk
- Material UI (MUI v5)
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Google OAuth

---

## 📂 Project Structure

memories/
├── client/
│ ├── src/
│ │ ├── components/
│ │ ├── actions/
│ │ ├── reducers/
│ │ ├── api/
│ │ └── App.js
│ └── package.json
│
├── server/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── index.js
│
└── README.md

---
2️⃣ Backend Setup
cd server
npm install


Create a .env file inside the server directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


Start the backend server:

npm run dev

---

3️⃣ Frontend Setup
cd client
npm install
npm start

The frontend will run at:

http://localhost:3000

