import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContextProvider.jsx';

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  async function submitHandler(e) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    // Basic validation
    if (!email || !password) {
      setError("All fields are required");
      setIsLoading(false);
      return;
    }
    if(password.length < 6){
      setError("Password must be at least 6 characters long");
      setIsLoading(false);
      return;
    }
    if(!email.includes("@") || !email.includes(".")){
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    const userData = {
      email,
      password,
    };

    try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/login`, userData, {
  headers: {
    "Content-Type": "application/json",
  },
});


      console.log("Login response:", response.data);
      const { token, user, message } = response.data;
      
      // Store token and user info
      // After successful login in Login.jsx
      localStorage.setItem("userInfo", JSON.stringify(user))
localStorage.setItem("user", JSON.stringify({ token: response.data.token }));
setUser({ token: response.data.token }); // <- if using context

      
      Cookies.set("token", token, {
        expires: 7, // 7 days
      });
      Cookies.set("userInfo", JSON.stringify(user), {
        expires: 7, // 7 days
      });
      
      setSuccess(message || "Login successful! Redirecting to home page...");
      
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Login error:", error);
      if (error.response && error.response.data) {
        setError(error.response.data.message || "Invalid email or password");
      } else {
        setError("Network error. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Animated Glowing Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-red-800/30 via-black to-red-900/40 blur-2xl animate-pulse" />
      </div>

      {/* Login Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-900/80 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md border border-zinc-800"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
          Login 🔐
        </h2>

        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-zinc-800 placeholder-zinc-500 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-10 pr-10 py-2 rounded-lg bg-zinc-800 placeholder-zinc-500 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              minLength={6}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 cursor-pointer"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-sm text-red-400 text-right hover:underline cursor-pointer -mt-2">
            Forgot Password?
          </div>

          {/* Login Button */}
          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="bg-red-600 hover:bg-red-700 transition-all rounded-xl py-3 font-bold mt-2 shadow-md shadow-red-900 flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </>
            ) : (
              'Login'
            )}
          </motion.button>
        </form>

        <p className="text-sm mt-6 text-center text-zinc-400">
          Don't have an account?{" "}
          <a href="/signup" className="text-red-500 hover:underline">
            Sign Up
          </a>
        </p>

        {error && (
          <p className="text-red-500 font-bold text-sm mt-4 text-center animate-pulse">
            {error}
          </p>
        )}

        {success && (
          <p className="text-green-500 font-bold text-sm mt-4 text-center animate-pulse">
            {success}
          </p>
        )}
      </motion.div>
    </div>
  );
}

export default Login;