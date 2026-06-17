# Admin Dashboard – User Management System

A React-based admin dashboard for managing users with login authentication and basic CRUD functionality.

This project was built while practicing React and trying to simulate a real admin panel structure.

---

## ✨ What it does

* Login with token-based authentication
* Protected dashboard routes
* Add, edit, and delete users
* Simple state-based data handling
* Responsive UI for mobile and desktop
* Basic session persistence using localStorage

---

## 🛠 Tech Stack

* React.js
* React Router
* Tailwind CSS
* JavaScript (ES6)
* Fake API for users/auth
* localStorage

---

## 📁 Project structure

```bash id="st1"
src/
 ├── components
 ├── pages
 ├── hooks
 ├── services
 ├── layouts
 ├── guards
 ├── utils
 └── App.jsx
```

---

## 🔐 How auth works

* User logs in with username/password
* API returns a token
* Token is saved in localStorage
* Protected routes check token before rendering dashboard

---

## 👥 User management

You can:

* Create new users
* Edit existing users
* Delete users from the list

Everything is handled on the frontend (no backend DB).

---

## 📦 Setup

```bash id="s2"
git clone https://github.com/soheilrast/admin-panel-react.git
cd admin-panel-react
npm install
npm run dev
```

---

## 📸 Screenshots

* Login page
* Dashboard
* Users page

---

## 🧠 Note

This project was mainly built for learning purposes, especially to understand how React projects are structured and how authentication and CRUD flows work in frontend apps.

---

## 👨‍💻 Author

GitHub: [soheilrast](https://github.com/soheilrast)


