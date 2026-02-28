import React from "react";
import { useParams, Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import * as Icons from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const BlogDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const {
    data: blog,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/blogs/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (isError || !blog) {
    return (
      <div className="text-center mt-20 text-error">
        Blog not found!
      </div>
    );
  }

  const IconComponent = Icons[blog.icon];

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 bg-base-100 rounded-xl shadow-lg mt-10">
      <div className="flex items-center space-x-4 mb-6">
        {IconComponent && (
          <IconComponent className="text-4xl text-primary" />
        )}
        <h1 className="text-3xl font-bold">{blog.title}</h1>
      </div>

      <p className="text-base-content/70 mb-2">
        <strong>Category:</strong> {blog.category}
      </p>

      <p className="text-base-content/70 mb-4">
        <strong>Date:</strong>{" "}
        {new Date(blog.date).toDateString()}
      </p>

      <p className="mb-6 text-base-content/80">
        {blog.description}
      </p>

      <div className="prose max-w-full mb-6">
        {blog.details
          ?.split("\n")
          .map((line, idx) =>
            line.trim() !== "" ? <p key={idx}>{line}</p> : null
          )}
      </div>

      <Link
        to="/blogs"
        className="btn btn-primary text-black"
      >
        ← Back to Blogs
      </Link>
    </div>
  );
};

export default BlogDetails;