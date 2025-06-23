import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white/5 border border-red-800 rounded-xl p-5 shadow-lg transition hover:scale-[1.02] hover:shadow-red-900 duration-300 cursor-pointer">
      <h3 className="text-xl font-bold text-red-500 mb-2">{blog.title}</h3>
      <p className="text-sm text-gray-300 mb-3 line-clamp-3">
        {blog.description}
      </p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>🕒 {blog.date || "May 28, 2025"}</span>
        <span>✍️ {blog.author || "AI Writer"}</span>
      </div>
    </div>
  );
};

export default BlogCard;
