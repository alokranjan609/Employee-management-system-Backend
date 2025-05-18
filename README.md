
# 🧑‍💼 Employee Management System - Backend

A role-based Employee Management System built with **Node.js**, **Express**, and **MongoDB**.  
Admins can manage employees, departments, and locations, while employees can view and update their own profile.

---

## 🚀 Features

### 🔐 Authentication
- Email-based registration and login
- JWT-based token authentication
- Role-based access control (Admin & Employee)

### 👥 Admin Functionality
- Add, view, update, and delete employees
- Add departments

### 👤 Employee Functionality
- View own profile
- Update own name, department, and location

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT
- **Dev Tools:** dotenv, nodemon

---

## 📁 Project Structure

```
employee-management-system/
├── config/
│   └── db.js               # MongoDB connection
├── controllers/            # Request handlers
├── models/                 # Mongoose schemas
├── routes/                 # Express routes
├── middlewares/            # Auth and role-checking
├── app.js                  # Express app setup
├── server.js               # Entry point
├── .env                    # Environment variables
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/alokranjan609/Employee-management-system-Backend
cd Employee-management-system-Backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create a `.env` file in the root:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/employee_mgmt
JWT_SECRET=your_jwt_secret
```

### 4. Start the Server
```bash
npm run dev     # development (with nodemon)
# OR
npm start       # production
```

---

## 📦 API Endpoints

### 🔐 Auth
| Method | Endpoint            | Description           |
|--------|---------------------|-----------------------|
| POST   | `/api/auth/register`| Register user         |
| POST   | `/api/auth/login`   | Login user            |

### 👨‍💼 Admin (requires `role: admin`)
| Method | Endpoint                 | Description             |
|--------|--------------------------|-------------------------|
| POST   | `/api/admin/employees`   | Add new employee        |
| GET    | `/api/admin/employees`   | View all employees      |
| PUT    | `/api/admin/employees/:id` | Update employee        |
| DELETE | `/api/admin/employees/:id` | Delete employee        |
| POST   | `/api/admin/departments` | Add department          |
| POST   | `/api/admin/locations`   | Add location            |

### 🙋‍♂️ Employee (requires `role: employee`)
| Method | Endpoint         | Description               |
|--------|------------------|---------------------------|
| GET    | `/api/employees/me` | View own profile       |
| PUT    | `/api/employees/me` | Update own profile     |

---

## 🛡️ Security
- Passwords are hashed using `bcryptjs`
- JWT authentication middleware
- Role-based route protection using custom middleware

---



## 🧑 Author

**Your Name**  
[GitHub](https://github.com/alokranjan609)

---

