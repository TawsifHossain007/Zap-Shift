# ZapShift - Parcel Delivery Management System

A comprehensive parcel delivery management platform built with React, featuring secure authentication, payment processing, and role-based dashboards for customers, administrators, and delivery riders.

**Live Site:** https://glistening-cheesecake-502203.netlify.app/

---

## Features

### User Features
- **Parcel Booking**: Create delivery requests with sender/receiver details and automatic cost calculation
- **Secure Payments**: Integrated Stripe payment gateway for secure transactions
- **Real-time Tracking**: Track parcels using unique tracking IDs with live status updates
- **Booking Management**: View, edit, and cancel parcels before rider assignment
- **Payment History**: Access complete payment transaction history
- **Dashboard Analytics**: Visual charts showing delivery status distribution and statistics
- **Authentication**: Secure login with credentials or Google OAuth

### Admin Features
- **Dashboard Analytics**: View comprehensive statistics including total users, riders, parcels, and revenue
- **Rider Management**: Approve/reject rider applications, monitor work status, and manage rider profiles
- **Parcel Assignment**: Assign deliveries to available riders based on pickup location
- **User Management**: Search users, assign admin roles, and view user activity
- **Payment Tracking**: Monitor all payment transactions and track revenue
- **Booking Oversight**: View and manage all parcel bookings across the platform

### Rider Features
- **Rider Dashboard**: View assigned and completed deliveries with performance analytics
- **Delivery Management**: Accept/reject assignments and update parcel status (Picked Up, On The Way, Delivered)
- **Earnings Tracking**: View payout for completed deliveries with different rates for same/cross-district
- **Performance Charts**: Track delivery performance over the last 7 days
- **Real-time Updates**: Receive instant notifications for new assignments

### Technical Features
- **Role-Based Access Control**: Separate dashboards and permissions for users, admins, and riders
- **Responsive Design**: Mobile-first design with Tailwind CSS and DaisyUI
- **Real-time Updates**: Dynamic data fetching with TanStack Query
- **Loading States**: Professional loading spinners for better UX
- **Form Validation**: Client-side validation with React Hook Form
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Secure Backend**: JWT-based authentication and authorization

---

## Tech Stack

**Frontend:** React 18, React Router, TanStack Query, Tailwind CSS, DaisyUI, Recharts, Framer Motion, React Hook Form, SweetAlert2

**Backend:** Node.js, Express, MongoDB, Mongoose, JWT

**Authentication:** Firebase Authentication

**Payment:** Stripe

**Hosting:** Netlify (Frontend), Vercel (Backend)

---

## Getting Started

### Prerequisites
- Node.js 16+ installed
- MongoDB database
- Firebase account
- Stripe account

### Installation

1. **Clone the repositories**

```bash
# Frontend
git clone https://github.com/TawsifHossain007/Zap-Shift.git

# Backend
git clone https://github.com/TawsifHossain007/Zap-Shift-Server.git
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

3. **Create environment files**

**Frontend (.env)**
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

**Backend (.env)**
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
PORT=5000
```

4. **Run the development servers**

```bash
# Frontend (http://localhost:5173)
npm run dev

# Backend (http://localhost:5000)
npm start
```

---

## Project Structure

```
Zap-Shift/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and static files
│   ├── Components/        # Reusable components
│   │   ├── Logo/
│   │   └── LoadingSpinner/
│   ├── Contexts/          # React Context providers
│   │   └── AuthContext/
│   ├── Firebase/          # Firebase configuration
│   ├── Hooks/             # Custom React hooks
│   │   ├── useAuth.jsx
│   │   ├── useAxiosSecure.jsx
│   │   └── useRole.jsx
│   ├── Layouts/           # Layout components
│   │   ├── Root.jsx
│   │   ├── AuthLayout.jsx
│   │   └── DashboardLayout.jsx
│   ├── Pages/             # Page components
│   │   ├── Home/
│   │   ├── Auth/
│   │   ├── Dashboard/
│   │   ├── SendParcel/
│   │   ├── ParcelTrack/
│   │   └── Rider/
│   ├── Routes/            # Route configuration
│   ├── App.jsx
│   └── main.jsx
└── .env
```

---

## Key Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with featured services |
| `/send-parcel` | Create new parcel delivery request |
| `/parcel-track/:id` | Track parcel by tracking ID |
| `/login` | User login |
| `/register` | User registration |
| `/rider` | Rider application form |
| `/dashboard` | User/Admin/Rider dashboard |
| `/dashboard/my-parcels` | User: View all parcels |
| `/dashboard/payment-history` | User: Payment history |
| `/dashboard/assigned-deliveries` | Rider: Assigned parcels |
| `/dashboard/completed-deliveries` | Rider: Completed deliveries |
| `/dashboard/approve-riders` | Admin: Approve riders |
| `/dashboard/assign-riders` | Admin: Assign deliveries |
| `/dashboard/users-management` | Admin: Manage users |
| `/dashboard/all-payments` | Admin: View all payments |

---

## API Endpoints

**Base URL:** `https://zapshift-server-zeta.vercel.app`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/parcels` | Get all parcels (with filters) |
| GET | `/parcels/:id` | Get parcel by ID |
| GET | `/parcels/rider` | Get rider's parcels |
| POST | `/parcels` | Create new parcel |
| PATCH | `/parcels/:id` | Assign rider to parcel |
| PATCH | `/parcels/:id/status` | Update parcel status |
| DELETE | `/parcels/:id` | Delete parcel |
| GET | `/payments` | Get all payments |
| POST | `/create-checkout-session` | Create Stripe payment session |
| GET | `/users` | Get all users |
| PATCH | `/users/:id/role` | Update user role |
| GET | `/riders` | Get all riders |
| POST | `/riders` | Create rider application |
| PATCH | `/riders/:id` | Update rider status |

---

## Authentication

The platform supports two authentication methods:

- **Credentials**: Email and password with Firebase Authentication
- **Google OAuth**: One-click sign-in with Google

All routes are protected with role-based access control using JWT tokens.

---

## Payment Flow

1. User selects parcel and fills booking form
2. System calculates cost based on weight and distance
3. User redirected to Stripe checkout
4. Payment processed securely via Stripe
5. Booking confirmed with unique tracking ID
6. User redirected to success page
7. Parcel appears in user dashboard

---

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_FIREBASE_API_KEY` | Firebase API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID |
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret for JWT tokens |
| `STRIPE_SECRET_KEY` | Stripe secret key |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.

## Contact

For any inquiries, please contact tawsifhossain18.o@gmail.com
