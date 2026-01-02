

##  Description

The **Bus Ticket Booking Application (Akhil Travels)** is a **full-stack MERN web application** that allows users to search for buses, select seats, proceed with payment, and receive ticket confirmation.
It also includes an **admin panel** to manage buses and bookings.

This project was developed to gain **hands-on experience with full-stack development**, REST APIs, authentication, and deployment.

---
Live demo videp : https://drive.google.com/file/d/1jGggV5wFMvdY6O6f1ohjV1wT_5rsmPL7/view?usp=sharing
----

## Tech Stack

### Frontend

* React.js (Create React App)
* Bootstrap 5
* Axios
* HTML, CSS, JavaScript

### Backend

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose
* JWT Authentication

---

## Project Structure

### Frontend (`frontend/`)

```
frontend/
├── public/
│   ├── index.html
│   └── manifest.json
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
│   ├── bookingRoutes.js
│   └── paymentRoutes.js
│
├── server.js
└── package.json
```

---

## Features

### User Features

* User Registration & Login (JWT based)
* View available buses
* Search buses using **From → To**
* Seat selection with **grid layout**
* Payment page with Razorpay (Test Mode)
* Ticket confirmation page with booking details

###  Admin Features

* Admin login
* Add new buses
* Manage bus details
* View bookings

###  UI & UX

* Responsive design using Bootstrap
* Clean navigation flow
* Background-image based authentication pages
* Mobile-friendly layout

---


##  Local Setup Instructions

### 1️ Clone the Repository

```bash
git clone https://github.com/AKHIL-DESIGN-PNG/Bus_Ticket_Booking.git
cd Bus_Ticket_Booking
```

---

### 2️ Backend Setup

```bash
cd backend
npm install
npm start
```

Backend runs at:

```
http://localhost:5000
```

Create `.env` file in `backend/`:

```env
MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
```

---

### 3️ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

##  Payment Information

* Razorpay integration implemented
* Uses **Test Mode**
* No real money transactions
* Payment flow demonstrated for learning purposes

---

## 📸 Screenshots

### Login Page
<img width="1909" height="940" alt="image" src="https://github.com/user-attachments/assets/70c05c28-19e1-4d1f-82b5-050504d4a5ce" />

### Register Page
<img width="1919" height="953" alt="image" src="https://github.com/user-attachments/assets/7ef71d04-6129-4628-83ce-62db52ede2a0" />

### Bus List Page
<img width="1913" height="944" alt="image" src="https://github.com/user-attachments/assets/a7696a0f-4021-4a65-a721-52b61250ba47" />

### Seat Selection Page
<img width="1918" height="944" alt="image" src="https://github.com/user-attachments/assets/cd73873f-f4b1-4abd-890e-0683815f2663" />


### Payment Page
<img width="1916" height="943" alt="image" src="https://github.com/user-attachments/assets/c6c9dbe9-cecc-42a9-a88d-268a07cf203b" />
<img width="1916" height="942" alt="image" src="https://github.com/user-attachments/assets/26a635e9-ceed-4087-80ff-f9b0193a01bb" />


### Ticket Confirmation
<img width="1919" height="935" alt="image" src="https://github.com/user-attachments/assets/5769e47d-8d53-4a39-8f46-2283c7451c7b" />
<img width="1919" height="945" alt="image" src="https://github.com/user-attachments/assets/42911549-7edc-4794-bb83-dd0110c21f50" />

---

##  Learning Outcomes

* MERN stack architecture
* REST API design
* JWT authentication
* React Hooks & state management
* Frontend-backend integration
* Deployment using Vercel & Render
* Debugging production issues

---

##  Author

**Yanamala Akhil Kumar Reddy**
B.Tech – Computer Science & Engineering
MERN Stack Developer

🔗 GitHub: [https://github.com/AKHIL-DESIGN-PNG](https://github.com/AKHIL-DESIGN-PNG)

---

