# 🏥 Care Point - Medical Camp Management System  

## 📌 Introduction  
**Care Point** is a web-based platform designed to streamline the management of medical camps. It allows users to browse upcoming camps, register, and securely pay for participation. Organizers can manage camps, track payments, and engage with participants efficiently.  

---

## 📑 Table of Contents  
- [✨ Features](#-features)  
- [🌐 Live Demo](#-live-demo)  
- [🛠 Installation](#-installation)  
- [🚀 Usage](#-usage)  
- [🏗 Technology Stack](#-technology-stack)  
- [📦 Dependencies](#-dependencies)  
- [🔑 Authentication & Authorization](#-authentication--authorization)  
- [🤝 Contributing](#-contributing)  

---

## ✨ Features  
✅ **Payment Gateway Integration** – Secure payment system for participants and organizers to track payments.  
✅ **Camp Management** – Organizers can add, update, or delete camps easily.  
✅ **Camp Profile Updates** – Update camp profiles with location and details.  
✅ **Participant Analytics** – Track total camp join costs and view past camps.  
✅ **Stripe Payment Option** – Secure online payments via Stripe.  
✅ **Payment History** – View and manage past transactions.  
✅ **Profile Update** – Participants and organizers can update their profiles.  
✅ **Feedback System** – Users can leave feedback after attending a camp.  
✅ **Camp Join System** – Participants can easily register for camps.  
✅ **Organizer Dashboard** – Manage camps, payments, and user feedback from one place.  

---

## 🌐 Live Demo  
🔗 **[Care Point Live](#)** _([text](https://carepoint-940e4.web.app))_  

---

## 🛠 Installation  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/mohibullah272/care-point.git  
cd care-point  
```

### 2️⃣ Install dependencies  
```bash
npm install  
```

### 3️⃣ Set up Firebase Authentication & Stripe keys  
- Create a `.env` file and add your Firebase & Stripe credentials.  

### 4️⃣ Run the development server  
```bash
npm run dev  
```

---

## 🚀 Usage  
👤 **Participants**: Register, browse camps, join, and make secure payments.  
📌 **Organizers**: Manage camps, view participants, and track payments.  

---

## 🏗 Technology Stack  

### **Frontend**  
- React  
- Tailwind CSS (Light Theme)  

### **Backend**  
- Node.js  
- Express.js  
- MongoDB  

### **Authentication**  
- Firebase  

### **Payment Integration**  
- Stripe  

---

## 📦 Dependencies  
```json
"dependencies": {
  "@mantine/core": "^7.16.0",
  "@mantine/hooks": "^7.16.0",
  "@stripe/react-stripe-js": "^3.1.1",
  "@stripe/stripe-js": "^5.5.0",
  "@tanstack/react-query": "^5.64.1",
  "aos": "^2.3.4",
  "axios": "^1.7.9",
  "firebase": "^11.1.0",
  "localforage": "^1.10.0",
  "match-sorter": "^8.0.0",
  "react": "^18.3.1",
  "react-datetime": "^3.3.1",
  "react-dom": "^18.3.1",
  "react-hook-form": "^7.54.2",
  "react-hot-toast": "^2.5.1",
  "react-icons": "^5.4.0",
  "react-router-dom": "^7.1.1",
  "react-stars": "^2.2.5",
  "recharts": "^2.15.0",
  "sort-by": "^1.2.0",
  "sweetalert2": "^11.15.10",
  "swiper": "^11.2.1"
}
```

---

## 🔑 Authentication & Authorization  
✅ Organizers & Participants can register and log in.  
✅ Organizers have access to a dashboard for managing camps and payments.  
✅ Participants can join camps, make payments, and view their analytics.  

---

## 🤝 Contributing  
Want to contribute? Follow these steps:  

1. **Fork** the repository.  
2. **Create a new branch** (`feature-xyz`).  
3. **Commit your changes**.  
4. **Open a pull request**.  
