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

TaskFlow Manager 2025 is a secure task management platform designed to help teams and individuals organize, track, and manage tasks efficiently.

The application supports:

* JWT Authentication
* Role-Based Access Control (RBAC)
* Admin and User Dashboards
* Task Creation & Management
* Priority & Status Tracking
* Responsive UI

---

## ✨ Features

### 🔐 Authentication

* User Signup
* User Login
* JWT-based Authentication
* Protected Routes

### 👥 Role-Based Access Control

#### Admin Dashboard

* View All Tasks
* Create Tasks
* Update Tasks
* Delete Tasks
* Manage Users

#### User Dashboard

* View Assigned Tasks
* Update Task Status
* Manage Personal Tasks

### 📝 Task Management

Each task contains:

* Title
* Description
* Due Date
* Priority Level
* Status Tracking

### 📊 Priority Levels

* Low
* Medium
* High
* Urgent

### 📌 Status Types

* To Do
* In Progress
* Review
* Completed

### 🎨 UI Features

* Responsive Design
* Dashboard Layout
* Modern Interface
* Mobile Friendly

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
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── package.json
│
├── images/
│   ├── Screenshot 2026-05-30 173817.png
│   ├── Screenshot 2026-05-30 173906.png
│   └── Screenshot 2026-05-30 174104.png
│
└── README.md
```

---

# 📸 Screenshots

## 🏠 Landing Page

<img src="images/Screenshot 2026-05-30 173817.png" width="900"/>

---

## 🔐 Login Page

<img src="images/Screenshot 2026-05-30 173906.png" width="900"/>

---

## 📝 Signup Page

<img src="images/Screenshot 2026-05-30 174104.png" width="900"/>

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Kumarkrk/task.git
```

### Navigate to Project Folder

```bash
cd task
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## ▶️ Running the Application

### Start Backend

```bash
cd backend
npm start
```

Backend:

```text
http://localhost:5000
```

### Start Frontend

```bash
cd frontend
npm start
```

Frontend:

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
* File Attachments
* Team Collaboration
* Activity Logs
* Dark Mode
* Real-Time Updates with Socket.IO
* Analytics Dashboard

---

## 👨‍💻 Author

### Kamuju Rohini Kumar

GitHub:
https://github.com/Kumarkrk

LinkedIn:
https://linkedin.com/in/kamuju-rohini-kumar-69925522b

---

## ⭐ Support

If you found this project useful, please give it a star ⭐ on GitHub.
