import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContextProvider.jsx';

import SidebarLayout from './components/SideBarLayout.jsx';
import Dashboard from './components/Dashboard.jsx';
import NewBlog from './components/NewBlog.jsx';
import MyBlogs from './components/Myblogs.jsx';
import Profile from './components/Profile.jsx';
import Notification from './components/Notification.jsx';

import Landing from './page/Landing.jsx';
import Login from './page/Login.jsx';
import SignUp from './page/SignUp.jsx';

const App = () => {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>

        {/* 🔹 Landing Page: If logged in, go to dashboard */}
        <Route path="/" element={!user ? <Landing /> : <Navigate to="/dashboard" replace />} />

        {/* 🔐 Auth Routes: Login & Signup */}
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/dashboard" replace />}
        />
        <Route
          path="/signup"
          element={!user ? <SignUp /> : <Navigate to="/dashboard" replace />}
        />

        {/* 🧭 Dashboard Routes inside Sidebar Layout */}
        <Route
          path="/"
          element={user ? <SidebarLayout /> : <Navigate to="/login" replace />}
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="new-blog" element={<NewBlog />} />
          <Route path="my-blogs" element={<MyBlogs />} />
          <Route path="profile" element={<Profile />} />
          <Route path="notifications" element={<Notification />} />
        </Route>

        {/* 🔁 Catch-all Route */}
        <Route path="*" element={<Navigate to={user ? "/dashboard" : "/"} replace />} />
      </Routes>
    </Router>
  );
};

export default App;
