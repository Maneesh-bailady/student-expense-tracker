<h1 align="center">
  💸 Personal Expense Tracker for Students
</h1>

<p align="center">
  A modern and responsive full-stack web app to help students track their daily expenses with ease.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Tech-MERN-blue?style=flat-square&logo=appveyor" />
  <img src="https://img.shields.io/badge/Frontend-TypeScript-blueviolet?style=flat-square&logo=typescript" />
  <img src="https://img.shields.io/badge/Backend-JavaScript-green?style=flat-square&logo=node.js" />
  <img src="https://img.shields.io/badge/Styling-TailwindCSS-38bdf8?style=flat-square&logo=tailwind-css" />
</p>

---

## 🌟 Features

- 🔐 User Authentication (Register/Login)
- 📊 Add, View, and Delete Expense Entries
- 📅 Date-wise tracking of your spendings
- 📁 Organized frontend and backend structure
- ⚡ Fast and responsive design with Tailwind CSS
- 🧠 Built with MERN stack and TypeScript (Frontend)

---

## 🛠️ Tech Stack

| Tech            | Description                                |
|-----------------|--------------------------------------------|
| 🖥️ Frontend     | React (TypeScript), Tailwind CSS            |
| 🧠 State Mgmt   | React Context API                           |
| 🌐 Backend      | Node.js, Express.js (JavaScript)            |
| 🗃️ Database     | MongoDB + Mongoose                          |
| 🔒 Auth         | JWT-based token authentication              |
| 📦 API Client   | Axios                                       |

---

## 📁 Project Structure

```bash
expense-tracker/
├── client/                 # Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Navbar, ExpenseCard, etc.
│   │   ├── context/        # Auth context
│   │   ├── pages/          # Login, Register, Dashboard
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── ...
│   └── tailwind.config.js
├── server/                 # Backend
│   ├── controllers/        # authController.js, expenseController.js
│   ├── models/             # User.js, Expense.js
│   ├── routes/             # authRoutes.js, expenseRoutes.js
│   ├── middleware/         # authMiddleware.js
│   ├── config/             # db.js
│   ├── index.js
│   └── ...
├── .env
├── package.json
└── README.md



```

## 🚀 Getting Started

### 📦 Backend Setup

```bash
cd backend
npm install
npx nodemon server.js

```


### 📦 Frontend Setup

```bash
cd frontend
cd app
npm i
npm run dev

```
