import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RiderDashboardHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: allParcels = [], isLoading, error } = useQuery({
    queryKey: ["rider-parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels`);
      return res.data.filter(parcel => parcel.riderEmail === user.email);
    },
    enabled: !!user?.email,
  });

  const parcels = allParcels;

  // ✅ Filter Data
  const assignedParcels = parcels.filter(
    (parcel) => parcel.deliveryStatus === "Rider_Assigned"
  );

  const completedParcels = parcels.filter(
    (parcel) => parcel.deliveryStatus === "parcel_delivered"
  );

  const todayString = new Date().toDateString();
  const todayDeliveries = parcels.filter(
    (parcel) =>
      parcel.AssignDate &&
      new Date(parcel.AssignDate).toDateString() === todayString
  );

  // ✅ Pie Chart Data
  const pieData = [
    { name: "Assigned", value: assignedParcels.length },
    { name: "Completed", value: completedParcels.length },
  ];

  const COLORS = ["#facc15", "#4ade80"];

  // ✅ Last 7 Days Data
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i);
    return d.toDateString();
  }).reverse();

  const barData = last7Days.map((day) => ({
    day: day.split(" ").slice(0, 3).join(" "),
    count: parcels.filter(
      (parcel) =>
        parcel.deliveredAt &&
        new Date(parcel.deliveredAt).toDateString() === day
    ).length,
  }));

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Rider Dashboard</h1>

      {isLoading && <LoadingSpinner message="Loading dashboard data..." />}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p>Error loading data: {error.message}</p>
        </div>
      )}

      {!isLoading && !error && (
        <div className="space-y-8">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded p-6 text-center">
          <h2 className="text-lg font-medium text-gray-600">
            Assigned Deliveries
          </h2>
          <p className="text-3xl font-bold mt-2">
            {assignedParcels.length}
          </p>
        </div>

        <div className="bg-white shadow rounded p-6 text-center">
          <h2 className="text-lg font-medium text-gray-600">
            Completed Deliveries
          </h2>
          <p className="text-3xl font-bold mt-2">
            {completedParcels.length}
          </p>
        </div>

        <div className="bg-white shadow rounded p-6 text-center">
          <h2 className="text-lg font-medium text-gray-600">
            Today's Deliveries
          </h2>
          <p className="text-3xl font-bold mt-2">
            {todayDeliveries.length}
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-lg font-medium mb-4 text-center">
            Assigned vs Completed
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-lg font-medium mb-4 text-center">
            Deliveries (Last 7 Days)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="day" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
        </div>
      )}
    </div>
  );
};

export default RiderDashboardHome;