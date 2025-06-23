import React from "react";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";

const Dashboard = () => {

  
  
  const dummyBlogs = [
    {
      _id: 1,
      title: "How AI is Revolutionizing Writing",
      description: "Explore how artificial intelligence is changing content creation...",
    },
    
    {
      _id: 2,
      title: "Top 5 Tools for Bloggers",
      description: "These tools will make your blogging life easier and more efficient...",
    },
    {
      _id: 2,
      title: "Top 5 Tools for Bloggers",
      description: "These tools will make your blogging life easier and more efficient...",
    },
    {
      _id: 2,
      title: "Top 5 Tools for Bloggers",
      description: "These tools will make your blogging life easier and more efficient...",
    },
    {
      _id: 2,
      title: "Top 5 Tools for Bloggers",
      description: "These tools will make your blogging life easier and more efficient...",
    },
    {
      _id: 2,
      title: "Top 5 Tools for Bloggers",
      description: "These tools will make your blogging life easier and more efficient...",
    },
    {
      _id: 2,
      title: "Top 5 Tools for Bloggers",
      description: "These tools will make your blogging life easier and more efficient...",
    },
    {
      _id: 2,
      title: "Top 5 Tools for Bloggers",
      description: "These tools will make your blogging life easier and more efficient...",
    },
    {
      _id: 2,
      title: "Top 5 Tools for Bloggers",
      description: "These tools will make your blogging life easier and more efficient...",
    },
    {
      _id: 2,
      title: "Top 5 Tools for Bloggers",
      description: "These tools will make your blogging life easier and more efficient...",
    },
    {
      _id: 2,
      title: "Top 5 Tools for Bloggers",
      description: "These tools will make your blogging life easier and more efficient...",
    },
    {
      _id: 2,
      title: "Top 5 Tools for Bloggers",
      description: "These tools will make your blogging life easier and more efficient...",
    },
    {
      _id: 2,
      title: "Top 5 Tools for Bloggers",
      description: "These tools will make your blogging life easier and more efficient...",
    },
    {
      _id: 2,
      title: "Top 5 Tools for Bloggers",
      description: "These tools will make your blogging life easier and more efficient...",
    },
//    ke blogs here...
  ];

  const username = JSON.parse(localStorage.getItem("userInfo"))?.username || "Guest";
  const today = new Date().toLocaleDateString("en-GB");

  return (
    <div className="h-100vh w-full bg-gradient-to-br from-black via-gray-900 to-red-900 text-white p-6 dodo">
      {/* Greeting */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Hey {username}! 👋</h1>
        <p className="text-gray-400">Welcome back! 📅 {today}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white/10 p-4 rounded-xl shadow backdrop-blur-md">
          <h2 className="text-sm text-gray-400">Total Blogs</h2>
          <p className="text-xl font-bold">{dummyBlogs.length}</p>
        </div>
        <div className="bg-white/10 p-4 rounded-xl shadow backdrop-blur-md">
          <h2 className="text-sm text-gray-400">Popular Topic</h2>
          <p className="text-md text-red-400 font-semibold">#AIContent</p>
        </div>
        <div className="bg-white/10 p-4 rounded-xl shadow backdrop-blur-md">
          <h2 className="text-sm text-gray-400">Last Login</h2>
          <p className="text-md">Today</p>
        </div>
        <div className="bg-white/10 p-4 rounded-xl shadow backdrop-blur-md">
          <h2 className="text-sm text-gray-400">Total Words</h2>
          <p className="text-md">~3200</p>
        </div>
      </div>

      {/* Generate CTA */}
      <div className="flex justify-end mb-6">
        <Link to="/new-blog">
          <button className="bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-lg font-semibold">
            ✍️ Generate New Blog
          </button>
        </Link>
      </div>

      {/* Blogs Section */}
      <div
      >
        <h2 className="text-2xl font-bold mb-4 overflow-y-auto ">Your Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6  h-[calc(50vh-20px)] dodo overflow-y-auto">
          {dummyBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
