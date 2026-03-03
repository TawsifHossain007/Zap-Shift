import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import {
  Legend,
  Pie,
  PieChart,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#4ade80", "#60a5fa", "#facc15", "#f87171", "#a78bfa"];

const AdminDashboardHome = () => {
  const axiosSecure = useAxiosSecure();

  // ================= QUERIES =================
  const { data: deliveryStats = [], isLoading: statsLoading } = useQuery({
    queryKey: ["delivery-status-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcels/delivery-status/stats");
      return res.data;
    },
  });

  const { data: payments = [], isLoading: paymentsLoading } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });

  const { data: users = [], isLoading: usersLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const { data: riders = [], isLoading: ridersLoading } = useQuery({
    queryKey: ["riders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const { data: parcels = [], isLoading: parcelsLoading } = useQuery({
    queryKey: ["parcels"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcels");
      return res.data;
    },
  });

  const isLoading =
    statsLoading ||
    paymentsLoading ||
    usersLoading ||
    ridersLoading ||
    parcelsLoading;

  // ================= CALCULATIONS =================
  const totalRevenue = payments
    .filter((p) => p.paymentStatus === "paid")
    .reduce((sum, p) => sum + Number(p.amount || 0), 0);

  const pieChartData = deliveryStats.map((item) => ({
    name: item._id,
    value: item.count,
  }));

  // ================= UI =================
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {isLoading && <LoadingSpinner message="Loading dashboard data..." />}

      {!isLoading && (
        <div className="space-y-12">
          {/* HEADER */}
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-500">
              Overview of delivery system performance
            </p>
          </div>

          {/* KPI SUMMARY */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Total Users", value: users.length },
              { label: "Total Riders", value: riders.length },
              { label: "Total Parcels", value: parcels.length },
              {
                label: "Total Revenue",
                value: `৳ ${totalRevenue.toLocaleString()}`,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition"
              >
                <p className="text-sm text-gray-500">{item.label}</p>
                <h2 className="text-3xl font-semibold mt-2 text-gray-800">
                  {item.value}
                </h2>
              </div>
            ))}
          </div>

          {/* DELIVERY STATUS SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* STATUS CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {deliveryStats.map((stat, index) => {
                const percentage = parcels.length
                  ? (stat.count / parcels.length) * 100
                  : 0;

                return (
                  <div
                    key={stat._id}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
                  >
                    <p className="text-sm text-gray-500">
                      {stat._id}
                    </p>

                    <h3 className="text-2xl font-bold mt-2 text-gray-800">
                      {stat.count}
                    </h3>

                    <div
                      className="h-2 mt-4 rounded-full"
                      style={{
                        backgroundColor:
                          COLORS[index % COLORS.length] + "33",
                      }}
                    >
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor:
                            COLORS[index % COLORS.length],
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* PIE CHART */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center">
              <h3 className="text-lg font-semibold text-gray-700 mb-6">
                Delivery Status Distribution
              </h3>

              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={70}
                      outerRadius={110}
                      paddingAngle={4}
                      label={({ percent }) =>
                        `${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell
                          key={index}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>

                    <Tooltip />
                    <Legend verticalAlign="bottom" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboardHome;