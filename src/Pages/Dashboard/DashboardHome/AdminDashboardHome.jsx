import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Legend, Pie, PieChart, Tooltip, Cell } from "recharts";

const COLORS = ["#4ade80", "#60a5fa", "#facc15", "#f87171", "#a78bfa"]; // green, blue, yellow, red, purple

const AdminDashboardHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data: deliveryStats = [] } = useQuery({
    queryKey: ["delivery-status-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcels/delivery-status/stats");
      return res.data;
    },
  });

  const pieChartData = deliveryStats.map((item) => ({
    name: item.status,
    value: item.count,
  }));

  return (
    <div className="p-8 flex flex-col gap-12">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {deliveryStats.map((stat) => (
          <div
            key={stat._id}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/20 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <div>
                <div className="text-gray-500 font-medium">{stat._id}</div>
                <div className="text-2xl font-bold text-gray-800">{stat.count}</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              {/* Optional: trend info */}
              ↘︎ 90 (14%)
            </div>
          </div>
        ))}
      </div>

      {/* Pie Chart */}
      <div className="flex justify-center items-center">
        <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            innerRadius={60} // donut style
            paddingAngle={5}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
            isAnimationActive={true}
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [value, "Parcels"]}
            contentStyle={{ backgroundColor: "#1f2937", color: "#fff", borderRadius: "8px" }}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            wrapperStyle={{ fontSize: "14px", fontWeight: 500 }}
          />
        </PieChart>
      </div>
    </div>
  );
};

export default AdminDashboardHome;