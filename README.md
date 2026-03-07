# ZapShift - Parcel Delivery Management System

<div align="center">

![ZapShift Logo](public/logo.png)

**A comprehensive role-based parcel delivery management platform**

[Live Demo](https://glistening-cheesecake-502203.netlify.app/) | [Report Bug](https://github.com/TawsifHossain007/Zap-Shift/issues) | [Request Feature](https://github.com/TawsifHossain007/Zap-Shift/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [User Roles](#user-roles)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Demo Credentials](#demo-credentials)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

ZapShift is a modern, full-stack parcel delivery management system designed to streamline the entire delivery workflow. Built with React and Node.js, it provides separate dashboards for three distinct user roles: customers, administrators, and delivery riders.

The platform enables users to create parcel delivery requests, track shipments in real-time, and complete secure online payments. Administrators can manage the entire operation from a centralized dashboard, while riders receive and update delivery assignments on the go.

### Why ZapShift?

- **Role-Based Access Control**: Separate dashboards tailored for users, admins, and riders
- **Real-Time Tracking**: Live parcel status updates throughout the delivery journey
- **Secure Payments**: Integrated Stripe payment gateway for safe transactions
- **Intelligent Assignment**: Automatic rider assignment based on location and availability
- **Comprehensive Analytics**: Detailed insights into delivery performance and revenue

---

## ✨ Key Features

### For Customers

- **Parcel Booking**
  - Create delivery requests with detailed sender/receiver information
  - Select parcel type (document/non-document) and weight
  - Automatic cost calculation based on distance and weight
  - Unique tracking ID generation for each parcel

- **Payment Integration**
  - Secure online payment via Stripe
  - Payment history tracking
  - Transaction receipts and confirmations

- **Parcel Management**
  - View all parcels in a centralized dashboard
  - Real-time status updates (Pending, Assigned, On The Way, Delivered)
  - Edit or cancel parcels before rider assignment
  - Track parcels using unique tracking IDs

- **Dashboard Analytics**
  - Visual charts showing delivery status distribution
  - Payment history overview
  - Delivery statistics (assigned, completed, pending)

### For Administrators

- **Comprehensive Dashboard**
  - Overview of total users, riders, parcels, and revenue
  - Delivery status distribution with interactive charts
  - Real-time system performance metrics

- **Rider Management**
  - Approve or reject rider applications
  - View rider profiles with contact information
  - Monitor rider work status (Available/Busy)
  - Remove riders from the system

- **Parcel Assignment**
  - View all pending parcels
  - Assign riders based on pickup location
  - Filter available riders by district
  - Track assignment history

- **User Management**
  - Search and filter users
  - Promote users to admin role
  - View user activity and parcel history

- **Payment Oversight**
  - View all payment transactions
  - Track revenue by date
  - Export payment reports

### For Delivery Riders

- **Rider Dashboard**
  - View assigned and completed deliveries
  - Today's delivery count
  - Performance charts (last 7 days)
  - Assigned vs completed delivery comparison

- **Delivery Management**
  - Accept or reject delivery assignments
  - Update parcel status (Picked Up, On The Way, Delivered)
  - View detailed parcel information
  - Access sender and receiver contact details

- **Earnings Tracking**
  - View payout for completed deliveries
  - Different rates for same-district vs cross-district deliveries
  - Cashout functionality for completed deliveries

### General Features

- **Authentication & Security**
  - Firebase Authentication (Email/Password, Google Sign-In)
  - JWT-based API security
  - Role-based route protection
  - Secure password handling

- **Responsive Design**
  - Mobile-first approach
  - Works seamlessly on desktop, tablet, and mobile
  - Touch-friendly interface for riders on the go

- **Real-Time Updates**
  - Live parcel status tracking
  - Instant notifications for status changes
  - Real-time dashboard data refresh

- **Search & Filter**
  - Search users by name or email
  - Filter parcels by status
  - Filter riders by location and availability

---

## 👥 User Roles

### 1. Customer (Default Role)
- Register and create an account
- Book parcel deliveries
- Make payments
- Track parcels
- View delivery history

### 2. Administrator
- Full system access
- Manage users and riders
- Assign deliveries
- View analytics and reports
- Handle payments

### 3. Delivery Rider
- Apply for rider position
- View assigned deliveries
- Update delivery status
- Track earnings
- Manage availability

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **React Router** - Client-side routing
- **TanStack Query (React Query)** - Server state management
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind component library
- **Recharts** - Data visualization
- **React Hook Form** - Form management
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **SweetAlert2** - Beautiful alerts

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **Stripe** - Payment processing

### Authentication & Hosting
- **Firebase Authentication** - User authentication
- **Netlify** - Frontend hosting
- **Vercel** - Backend hosting

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB database
- Firebase account
- Stripe account

### Installation

1. **Clone the repositories**

```bash
# Frontend
git clone https://github.com/TawsifHossain007/Zap-Shift.git
cd Zap-Shift

# Backend (in a separate directory)
git clone https://github.com/TawsifHossain007/Zap-Shift-Server.git
cd Zap-Shift-Server
```

2. **Install dependencies**

```bash
# Frontend
cd Zap-Shift
npm install

# Backend
cd Zap-Shift-Server
npm install
```

3. **Configure environment variables** (see [Environment Variables](#environment-variables))

4. **Start development servers**

```bash
# Frontend (runs on http://localhost:5173)
npm run dev

# Backend (runs on http://localhost:5000)
npm start
```

---

## 🔐 Environment Variables

### Frontend (.env)

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

### Backend (.env)

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
PORT=5000
```

---

## 📁 Project Structure

```
Zap-Shift/
├── public/
│   ├── logo.png
│   ├── reviews.json
│   └── ServiceCenter.json
├── src/
│   ├── assets/          # Images and static files
│   ├── Components/      # Reusable components
│   │   ├── Logo/
│   │   └── LoadingSpinner/
│   ├── Contexts/        # React Context providers
│   │   └── AuthContext/
│   ├── Firebase/        # Firebase configuration
│   ├── Hooks/           # Custom React hooks
│   │   ├── useAuth.jsx
│   │   ├── useAxios.jsx
│   │   ├── useAxiosSecure.jsx
│   │   └── useRole.jsx
│   ├── Layouts/         # Layout components
│   │   ├── Root.jsx
│   │   ├── AuthLayout.jsx
│   │   └── DashboardLayout.jsx
│   ├── Pages/           # Page components
│   │   ├── Home/
│   │   ├── Auth/
│   │   ├── Dashboard/
│   │   ├── SendParcel/
│   │   ├── ParcelTrack/
│   │   └── Rider/
│   ├── Routes/          # Route configuration
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
├── vite.config.js
└── README.md
```

---

## 📡 API Documentation

### Base URL
```
Production: https://zapshift-server-zeta.vercel.app
Development: http://localhost:5000
```

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | User login |
| POST | `/api/auth/google` | Google OAuth login |

### Parcel Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/parcels` | Get all parcels (with filters) |
| GET | `/parcels/:id` | Get parcel by ID |
| GET | `/parcels/rider` | Get rider's parcels |
| POST | `/parcels` | Create new parcel |
| PATCH | `/parcels/:id` | Update parcel |
| PATCH | `/parcels/:id/status` | Update parcel status |
| DELETE | `/parcels/:id` | Delete parcel |

### Payment Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/payments` | Get all payments |
| POST | `/create-checkout-session` | Create Stripe session |
| POST | `/payment-success` | Handle payment success |

### User & Rider Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | Get all users |
| PATCH | `/users/:id/role` | Update user role |
| GET | `/riders` | Get all riders |
| POST | `/riders` | Create rider application |
| PATCH | `/riders/:id` | Update rider status |

---

## 🔑 Demo Credentials

### Administrator Access
- **Email:** stevebhai@gmail.com
- **Password:** T@wsif

### Test User Account
- **Email:** steven@gmail.com
- **Password:** Steven@123

### Test Rider Account
- **Email:** tom@gmail.com
- **Password:** Tom@123

---

## 📸 Screenshots

### Home Page
![Home Page](screenshot-home.png)

### User Dashboard
![User Dashboard](screenshot-user-dashboard.png)

### Admin Dashboard
![Admin Dashboard](screenshot-admin-dashboard.png)

### Rider Dashboard
![Rider Dashboard](screenshot-rider-dashboard.png)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developer

**Tawsif Hossain**

- GitHub: [@TawsifHossain007](https://github.com/TawsifHossain007)
- Email: tawsifhossain18.o@gmail.com

---

## 🙏 Acknowledgments

- Firebase for authentication services
- Stripe for payment processing
- MongoDB for database solutions
- Netlify and Vercel for hosting
- All contributors and testers

---

<div align="center">

**Made with ❤️ by Tawsif Hossain**

[⬆ Back to Top](#zapshift---parcel-delivery-management-system)

</div>
