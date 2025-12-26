# Bus_Ticket_Booking
#  Bus Ticket Booking Application(Akhil_Travels)

### MERN Stack Project

> **Project** – Developed as part of  learning to understand full-stack web development using the MERN stack.

---

##  Project Overview

This is a **Bus Ticket Booking Web Application** built using the **MERN Stack**:

* **MongoDB** – Database
* **Express.js** – Backend framework
* **React.js** – Frontend library
* **Node.js** – Runtime environment

The application allows users to **search buses, select seats, proceed to payment (UI ready), and confirm tickets**, while admins can **manage buses and bookings**.

---

##  Tech Stack

### => Frontend

* React.js (Create React App)
* Bootstrap 5
* Axios
* HTML, CSS, JavaScript

### =>Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## Project Structure

###  Frontend (`frontend/`)

```
frontend/
├── public/
│   ├── index.html
│   ├── manifest.json
|
│
├── src/
│   ├── assets/
│   │   ├── admin.webp
│   │   ├── bus.png
│   │   └── image_background.webp
│   │
│   ├── pages/
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── BusList.js
│   │   ├── SeatSelection.js
│   │   ├── Payment.js
│   │   ├── Confirmation.js
│   │   ├── AdminAddBus.js
│   │   └── AdminDashboard.js
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
│
└── package.json
```

---

### Backend (`backend/`)

```
backend/
├── models/
│   ├── User.js
│   ├── Bus.js
│   └── Booking.js
│
├── routes/
│   ├── userRoutes.js
│   ├── adminRoutes.js
│   └── bookingRoutes.js
│
├── server.js
└── package.json
```

---

##  Features

###  User Features

* User Registration & Login
* View available buses
* Search buses using **From → To**
* Seat selection with **grid layout**
* Payment page (UI implemented)
* Ticket confirmation page

### Admin Features

* Add new buses
* Admin dashboard
* Manage bus details

### UI & UX

* Bootstrap-based responsive design
* Navigation bar
* Card-based layouts
* Background image login & register pages
* Clean and consistent UI

-------------------


## Frontend Setup

### Frontend created using:

```bash
npx create-react-app frontend
```

### Install & run frontend:

```bash
cd frontend
npm install
npm start
```

 Runs on:

```
http://localhost:3000
```

---

## Backend Setup

### Install & run backend:

```bash
cd backend
npm install
npm start
```

 Runs on:

```
http://localhost:5000
```

---

## Running the Application

1️ Start Backend

```bash
cd backend
npm start
```

2️ Start Frontend

```bash
cd frontend
npm start
```

3️ Open in Browser

```
http://localhost:3000
```

---
### Login Page
<img width="1919" height="937" alt="image" src="https://github.com/user-attachments/assets/aef21f7b-069e-45e3-a726-c75b3509b249" />

### Register Page
<img width="1916" height="945" alt="image" src="https://github.com/user-attachments/assets/a02e53c5-43ce-42c9-b6ea-b40d930b60d7" />

### Bus List Page
<img width="1919" height="948" alt="image" src="https://github.com/user-attachments/assets/216674d0-2a32-42e3-b500-64de8ad4a1a9" />

### Seat Selection Page
<img width="1918" height="958" alt="image" src="https://github.com/user-attachments/assets/70cff17c-d9b8-4813-99db-020c12798f50" />

### Payment Page
<img width="1918" height="939" alt="image" src="https://github.com/user-attachments/assets/5eddbb62-abd6-4fa6-a3f0-f4bc88a322f8" />


### Ticket Confirmation

<img width="1917" height="935" alt="image" src="https://github.com/user-attachments/assets/bc4e7168-a8bc-4bdc-844f-d58b9cdf13f5" />




##  Payment Information

* Payment page UI is implemented
* Currently uses **dummy payment flow**
* No real money transactions

---

##  Learning Outcomes

* MERN stack architecture
* React component-based design
* REST API creation & usage
* Axios for frontend-backend communication
* State management using React Hooks
* UI design using Bootstrap


##  Author

**Akhil Kumar Reddy Yanamala**
B.Tech – Computer Science
MERN Stack Developer 

---


