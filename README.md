# 🌟 Saffrona - Modern Full-Stack Web Application

[![Netlify Status](https://api.netlify.com/api/v1/badges/50cff264-b796-4fa9-a7e3-a0d3054e2394/deploy-status)](https://app.netlify.com/projects/saffrona/deploys)
[![Render Status](https://img.shields.io/badge/Backend-Render-brightgreen?style=flat-square)](https://saffrona-backend.onrender.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/engr-sudiptto/Saffrona/blob/main/LICENSE)

**Saffrona** is a premium, full-featured full-stack web application built with modern web technologies. It delivers a fast, responsive, and seamless user experience paired with a robust backend architecture.

🔗 **Live Demo:** [https://saffrona.netlify.app/](https://saffrona.netlify.app/)

---

## 📸 Preview

![Saffrona Project Banner](./src/assets/projectImage.png)  

---

## 🚀 Technologies & Tech Stack

### Frontend
* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Backend & Database
* ![NodeJS](https://img.shields.io/badge/node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![MongoDB](https://img.shields.io/badge/MongoDB-%2347A248.svg?style=for-the-badge&logo=mongodb&logoColor=white)

### Hosting & Deployment
* ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7) (Frontend)
* ![Render](https://img.shields.io/badge/Render-%2346E3B7.svg?style=for-the-badge&logo=render&logoColor=white) (Backend)

---

## ✨ Features

- 🔐 **Secure Authentication:** JWT-based user login, registration, and session management.
- 📱 **Fully Responsive Layout:** Optimized beautifully for Mobile, Tablet, and Desktop screens using TailwindCSS.
- ⚡ **Lightning Fast Performance:** Bundled with Vite for fast HMR (Hot Module Replacement) and optimized production builds.
- 📊 **Dynamic Data Management:** Real-time data retrieval, storage, and manipulation using MongoDB and Mongoose.
- 🛠️ **RESTful API Architecture:** Scalable and well-structured Express routes for seamless client-server communication.
- 🎨 **Elegant User Interface:** Smooth transitions, modern components, and custom interactive UI/UX designs.

---

## 📂 Project Folder Structure

```text
saffrona/
│
├── frontend/
│   ├── src/
│   │   ├── assets/         # Images, icons, and local media
│   │   ├── components/     # Reusable UI elements (Navbar, Footer, etc.)
│   │   ├── pages/          # App views/pages (Home, Menu, Contact, etc.)
│   │   ├── context/        # State management (AuthContext, etc.)
│   │   ├── App.jsx         # Core app routing and layout
│   │   ├── index.css       # Global Tailwind CSS configurations
│   │   └── main.jsx        # Frontend entry file
│   ├── tailwind.config.js  # Tailwind custom configurations
│   ├── vite.config.js      # Vite specific bundling configurations
│   └── package.json
└── README.md
```

---

## 🛠️ Installation & Setup

Follow these steps to set up and run Saffrona locally on your computer.

### Prerequisites
Make sure you have **Node.js** and **MongoDB** installed on your machine.

### 1. Clone the Repository
```bash
git clone https://github.com/engr-sudiptto/Saffrona.git
cd saffrona
```

### 2. Backend Configuration
1. Navigate to the backend folder:
   ```bash
   git clone https://github.com/engr-sudiptto/Saffrona-backend.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root of the backend directory and add the following configuration:
   ```env
   PORT = 4000
   MONGO_URI = your_mongodb_connection_string
   JWT_SECRET = your_super_secret_jwt_key
   ```
4. Start the backend development server:
   ```bash
   npm run dev
   ```

### 3. Frontend Configuration
1. Navigate back to the frontend folder:
   ```bash
   git clone https://github.com/engr-sudiptto/Saffrona.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

---

## 🌐 Deployment Details

- **Frontend:** Automatically built and deployed via **Netlify** from the main branch.
- **Backend:** Hosted on **Render**, connected with MongoDB Atlas cloud database.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---


## 👨‍💻 Author

**Your Name**
* GitHub: [engr-sudipttos](https://github.com/engr-sudiptto)
* LinkedIn: [engr-sudiptto](https://www.linkedin.com/in/engr-sudiptto/)

*Give a ⭐️ if this project inspired you!*
<br>
<br>


<p align="center"><b>Sudipto Das</b> | Amplifying human capability and scaling innovation with the speed of AI.</p>