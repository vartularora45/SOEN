import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaPlusCircle,
  FaFileAlt,
  FaUser,
  FaBell,
  FaSignOutAlt,
} from "react-icons/fa";
import Cookies from "js-cookie";
import { useAuth } from "../context/AuthContextProvider";

const Sidebar = ({ user }) => {
  const loggedInUser = JSON.parse(localStorage.getItem("userInfo"));
  console.log("looged in user",loggedInUser);
  return (
    <aside className="flex flex-col bg-black text-white w-64 h-100vh p-6">
      {/* Logo */}
      <div className="text-red-600 font-bold text-3xl mb-10 cursor-pointer">
        MyDashboard
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-5 flex-1">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold" : "hover:text-red-600"
          }
        >
          <FaTachometerAlt className="inline mr-3" /> Dashboard
        </NavLink>

        <NavLink
          to="/new-blog"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold" : "hover:text-red-600"
          }
        >
          <FaPlusCircle className="inline mr-3" /> New Blog
        </NavLink>

        <NavLink
          to="/my-blogs"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold" : "hover:text-red-600"
          }
        >
          <FaFileAlt className="inline mr-3" /> My Blogs
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold" : "hover:text-red-600"
          }
        >
          <FaUser className="inline mr-3" /> Profile
        </NavLink>

        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold" : "hover:text-red-600"
          }
        >
          <FaBell className="inline mr-3" /> Notifications
        </NavLink>
      </nav>

      {/* User Info and Logout */}
      <div className="mt-auto pt-6 border-t border-gray-700">
        <div className="flex items-center space-x-4 mb-3">
          <img
            src={
              user?.avatarUrl ||
              "https://imgs.search.brave.com/dH3EldGecxsMMytF65mF2xtOcIkcHLYvGXsg3y66TAE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vM2pCanhs/bWpGZ2ozc1dEaVhR/MWFBLVc1bW5saWZj/U2N4VXhaOWMtaVB1/WS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/TUM1My9jQzVqYjIw/dmNHbGphblZ0L1lt/OHVZMjl0TDNkd0xX/TnYvYm5SbGJuUXZk/WEJzYjJGay9jeTl6/YVd4b2IzVmxkSFJs/L0xXOW1MV0V0WjNW/NUxYZHAvZEdndFlT/MWpZWEF0WVhRdC9j/bVZrTFhOcmVTMXpk/VzV6L1pYUXRabkps/WlMxcGJXRm4vWlM1/cWNHVm5QM2M5TmpB/dy9KbkYxWVd4cGRI/azlPREE.jpeg"
            }
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">
              {loggedInUser.username || "Guest User"}
            </p>
            <p className="text-gray-400 text-sm">
              {loggedInUser.email || "guest@example.com"}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("userInfo");
            Cookies.remove("jwt");
            window.location.href = "/login";
          }}
          className="w-full bg-red-600 hover:bg-red-700 rounded py-2 text-white font-semibold"
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
