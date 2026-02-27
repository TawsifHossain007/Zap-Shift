import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  FaUserShield,
  FaTruck,
  FaMoneyCheckAlt,
  FaChartLine,
} from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const iconMap = {
  FaUserShield: <FaUserShield className="text-3xl text-primary" />,
  FaTruck: <FaTruck className="text-3xl text-primary" />,
  FaMoneyCheckAlt: <FaMoneyCheckAlt className="text-3xl text-primary" />,
  FaChartLine: <FaChartLine className="text-3xl text-primary" />,
};

const Blogs = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: blogsData = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosSecure.get("/blogs");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center mt-20 text-error">
        Failed to load blogs.
      </div>
    );
  }

  return (
    <div className="bg-base-100 min-h-screen py-16 px-6">
      {/* Hero */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-4xl font-bold mb-4">Our Blogs</h1>
        <p className="text-base-content/70 max-w-2xl mx-auto">
          Stay updated with insights about our parcel delivery management
          system, workflow strategies, security practices, and technology
          integrations.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogsData.map((blog) => (
          <div
            key={blog._id}
            className="card bg-base-200 shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="card-body">
              <div className="flex items-center justify-between mb-4">
                {iconMap[blog.icon] || (
                  <FaUserShield className="text-3xl text-primary" />
                )}
                <span className="badge badge-outline">
                  {blog.category}
                </span>
              </div>

              <h2 className="card-title text-lg">
                {blog.title}
              </h2>

              <p className="text-sm text-base-content/70">
                {new Date(blog.date).toDateString()}
              </p>

              <p className="text-base-content/80 mt-3 line-clamp-3">
                {blog.description}
              </p>

              <div className="card-actions justify-end mt-4">
                <button className="btn btn-sm btn-primary text-black">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;