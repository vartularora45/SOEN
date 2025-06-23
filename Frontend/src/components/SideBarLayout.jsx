// src/components/SidebarLayout.jsx
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

const SidebarLayout = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className="flex h-screen w-screen  bg-gray-900 dodo">
      <Sidebar user={user} />
      <main className="flex-1  p-6 bg-gray-900  text-white ">
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;
