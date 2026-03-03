import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import {
  FaBox,
  FaClock,
  FaMotorcycle,
  FaShippingFast,
  FaCheckCircle,
  FaMoneyBillWave,
} from "react-icons/fa";

const UserDashboardHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });

  // =========================
  // Delivery Status Counts
  // =========================

  const riderAssignPending = parcels.filter(
    (p) => !p.deliveryStatus || !p.riderEmail
  ).length;

  const riderAssigned = parcels.filter(
    (p) => p.deliveryStatus === "Rider_Assigned"
  ).length;

  const riderOnTheWay = parcels.filter(
    (p) => p.deliveryStatus === "Rider_On_The_Way"
  ).length;

  const pickedUp = parcels.filter(
    (p) => p.deliveryStatus === "parcel_picked_up"
  ).length;

  const delivered = parcels.filter(
    (p) => p.deliveryStatus === "parcel_delivered"
  ).length;

  const totalPaid = payments
    .filter((p) => p.paymentStatus === "paid")
    .reduce((sum, p) => sum + Number(p.amount || 0), 0);

  // =========================
  // Chart Data
  // =========================

  const pieData = [
    { name: "Assign Pending", value: riderAssignPending },
    { name: "Assigned", value: riderAssigned },
    { name: "On The Way", value: riderOnTheWay },
    { name: "Picked Up", value: pickedUp },
    { name: "Delivered", value: delivered },
  ];

  const COLORS = ["#f59e0b", "#3b82f6", "#a855f7", "#06b6d4", "#22c55e"];

  const barData = pieData.map((item) => ({
    status: item.name,
    count: item.value,
  }));

  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* Header */}
      <h1 className="text-3xl font-bold mb-1">My Dashboard</h1>
      <p className="text-gray-500 mb-8">
        Overview of your parcel deliveries
      </p>

      {/* ================= CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        {/* Total Parcels */}
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <FaBox className="text-3xl text-indigo-500" />
            <p className="text-sm text-gray-500">Total Parcels</p>
            <h2 className="text-3xl font-bold">{parcels.length}</h2>
          </div>
        </div>

        {/* Assign Pending */}
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <FaClock className="text-3xl text-yellow-500" />
            <p className="text-sm text-gray-500">Assign Pending</p>
            <h2 className="text-3xl font-bold text-yellow-500">
              {riderAssignPending}
            </h2>
          </div>
        </div>

        {/* Assigned */}
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <FaMotorcycle className="text-3xl text-blue-500" />
            <p className="text-sm text-gray-500">Rider Assigned</p>
            <h2 className="text-3xl font-bold text-blue-500">
              {riderAssigned}
            </h2>
          </div>
        </div>

        {/* On The Way */}
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <FaShippingFast className="text-3xl text-purple-500" />
            <p className="text-sm text-gray-500">On The Way</p>
            <h2 className="text-3xl font-bold text-purple-500">
              {riderOnTheWay}
            </h2>
          </div>
        </div>

        {/* Picked Up */}
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <FaShippingFast className="text-3xl text-cyan-500" />
            <p className="text-sm text-gray-500">Picked Up</p>
            <h2 className="text-3xl font-bold text-cyan-500">
              {pickedUp}
            </h2>
          </div>
        </div>

        {/* Delivered */}
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <FaCheckCircle className="text-3xl text-green-500" />
            <p className="text-sm text-gray-500">Delivered</p>
            <h2 className="text-3xl font-bold text-green-500">
              {delivered}
            </h2>
          </div>
        </div>

        {/* Payments */}
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <FaMoneyBillWave className="text-3xl text-emerald-600" />
            <p className="text-sm text-gray-500">Total Payments</p>
            <h2 className="text-3xl font-bold text-emerald-600">
              ৳ {totalPaid}
            </h2>
          </div>
        </div>

      </div>

      {/* ================= CHARTS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Pie Chart */}
        <div className="card bg-base-100 shadow p-6">
          <h3 className="text-lg font-semibold mb-4">
            Delivery Status Distribution
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={90}
                >
                  {pieData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="card bg-base-100 shadow p-6">
          <h3 className="text-lg font-semibold mb-4">
            Delivery Status Overview
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="status" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="count" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserDashboardHome;