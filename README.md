# 🚀 TaskFlow Manager 2025

A modern Role-Based Task Management System built with the MERN Stack. The application provides secure JWT authentication, role-based dashboards (Admin/User), and complete task management functionality with priority and status tracking.

---

## 🌐 Live Application

### Frontend (Vercel)

https://task-five-gules.vercel.app/

### Backend (Render)

https://task-4-6f1r.onrender.com

---

## 📖 Overview

TaskFlow Manager 2025 helps organizations and individuals efficiently manage tasks through a secure and user-friendly platform. The system supports authentication, authorization, task assignment, and dashboard-based management.

Users can register, log in, and manage tasks according to their assigned roles. Admins have complete control over task operations, while users can manage their own assigned tasks.

---

## ✨ Features

### 🔐 Authentication & Security

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Role-Based Access Control (RBAC)

### 👥 Role-Based Access

#### Admin Dashboard

* View all tasks
* Create tasks
* Update tasks
* Delete tasks
* Manage assigned tasks

#### User Dashboard

* View personal tasks
* Update task status
* Manage assigned tasks

### 📝 Task Management

* Create new tasks
* Edit existing tasks
* Delete tasks
* Assign priorities
* Track task status
* Due date management

### 📊 Task Attributes

Each task includes:

* Title
* Description
* Due Date
* Priority

  * Low
  * Medium
  * High
  * Urgent
* Status

  * To Do
  * In Progress
  * Review
  * Completed

### 🎨 User Interface

* Responsive Design
* Modern Dashboard Layout
* Interactive Task Cards
* Clean Navigation
* Mobile-Friendly UI

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* CSS3
* JWT Decode

### Backend

* Node.js
* Express.js
* JWT Authentication
* REST APIs

### Database

* MongoDB
* Mongoose

### Deployment

* Vercel
* Render

### Version Control

* Git
* GitHub

---

## 📂 Project Structure

```text
task/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── Components/
│   │   ├── Pages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## 📸 Screenshots

### 🏠 Landing Page

<img src="images/landing-page.png" width="900"/>

### 🔑 Login Page

<img src="images/login-page.png" width="900"/>

### 📝 Signup Page

<img src="images/signup-page.png" width="900"/>

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Kumarkrk/task.git
```

Move into project directory:

```bash
cd task
```

---

### Install Backend Dependencies

```bash
cd server
npm install
```

---

### Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the server folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## ▶️ Run the Application

### Start Backend

```bash
cd server
npm start
```

Backend runs at:

```text
http://localhost:5000
```

---

### Start Frontend

```bash
cd client
npm start
```

Frontend runs at:

```text
http://localhost:3000
```

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description   |
| ------ | -------- | ------------- |
| POST   | /signup  | Register User |
| POST   | /login   | Login User    |

### Tasks

| Method | Endpoint   | Description   |
| ------ | ---------- | ------------- |
| GET    | /tasks     | Get All Tasks |
| POST   | /tasks     | Create Task   |
| PUT    | /tasks/:id | Update Task   |
| DELETE | /tasks/:id | Delete Task   |

---

## 🚀 Future Enhancements

* Email Notifications
* Task Comments
* Team Collaboration
* File Attachments
* Dark Mode
* Activity Logs
* Real-Time Updates using Socket.IO
* Advanced Analytics Dashboard

---

## 👨‍💻 Author

### Kamuju Rohini Kumar

* GitHub: https://github.com/Kumarkrk
* LinkedIn: https://linkedin.com/in/kamuju-rohini-kumar-69925522b

---

## ⭐ Support

If you found this project useful, please give it a star ⭐ on GitHub.

---

## 📜 License

This project is open-source and available under the MIT License.
