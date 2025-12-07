import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Rider from "../Pages/Rider/Rider";
import PrivateRoute from "./PrivateRoute";
import SendParcel from "../Pages/SendParcel/SendParcel";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../Pages/Dashboard/Payment/PaymentCancelled";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../Pages/Dashboard/ApproveRiders/ApproveRiders";
import UsersManagement from "../Pages/Dashboard/UsersManagement/UsersManagement";
import AdminRoutes from "./AdminRoutes";
import AssignRiders from "../Pages/Dashboard/AssignRIders/AssignRiders";
import RiderRoutes from "./RiderRoutes";
import AssignedDeliveries from "../Pages/Dashboard/AssignedDeliveries/AssignedDeliveries";
import CompletedDeliveries from "../Pages/Dashboard/CompletedDeliveries/CompletedDeliveries";
import ParcelTrack from "../Pages/ParcelTrack/ParcelTrack";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import AboutUs from "../Pages/AboutUs/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: '/rider',
            element: <PrivateRoute><Rider></Rider></PrivateRoute>,
            loader: () => fetch('/ServiceCenter.json').then(res=>res.json())

        },
        {
            path: "/sendParcel",
            element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
             loader: () => fetch('/ServiceCenter.json').then(res=>res.json())
        },
        {
            path: "/coverage",
            Component: Coverage,
            loader: () => fetch('/ServiceCenter.json').then(res=>res.json())
        },
        {
            path: '/aboutUs',
            Component: AboutUs
        },
        {
            path: "parcel-track/:trackingId",
            Component: ParcelTrack
        }
    ]
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
        {
            path: '/login',
            Component: Login
        },
        {
            path: 'register',
            Component: Register
        }
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
        {
            index:true,
            Component: DashboardHome
        },
        {
            path: "my-parcels",
            Component: MyParcels
        },
        {
            path: "approve-riders",
            element: <AdminRoutes><ApproveRiders></ApproveRiders></AdminRoutes>
        },
        {
            path: "payment/:parcelId",
            Component: Payment
        },
        {
            path: 'payment-history',
            Component: PaymentHistory
        },
        {
            path: "payment-success",
            Component: PaymentSuccess
        },
        {
            path: "payment-cancelled",
            Component: PaymentCancelled
        },
        {
            path: "users-management",
            element: <AdminRoutes><UsersManagement></UsersManagement></AdminRoutes>
        },
        {
            path: 'assign-riders',
            element: <AdminRoutes><AssignRiders></AssignRiders></AdminRoutes>
        },
        //rider only
        {
            path: 'assigned-deliveries',
            element: <RiderRoutes><AssignedDeliveries></AssignedDeliveries></RiderRoutes>
        },
        {
            path: 'completed-deliveries',
            element: <RiderRoutes><CompletedDeliveries></CompletedDeliveries></RiderRoutes>
        }
    ]
  }
]);