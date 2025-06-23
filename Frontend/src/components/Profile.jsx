import React from "react";
import { motion } from "framer-motion";
import { UserCircle2, Sparkles } from "lucide-react";

const Profile = () => {
  return (
    <div className="h-[calc(100vh-48px)] overflow-y-auto bg-gradient-to-br from-black via-gray-900 to-red-900 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-red-500 flex items-center gap-2">
          <Sparkles className="text-red-400" /> My Profile
        </h2>

        <div className="border border-red-700 rounded-2xl p-6 bg-gradient-to-br from-zinc-800/60 to-zinc-900/80 backdrop-blur-md shadow-lg flex flex-col items-center text-center">
          <UserCircle2 size={96} className="text-red-400 mb-4" />

          <h3 className="text-2xl font-bold text-red-300">Vartul</h3>
          <p className="text-sm text-gray-300">Full Stack Developer 🚀 | MERN Stack Enthusiast</p>

          <p className="mt-4 text-white text-sm leading-relaxed max-w-md">
            Just a dev tryna master the MERN stack, automate life with AI, and build projects that slap. 
            Currently working on a futuristic SaaS task manager & soaking up all the dev magic I can. ⚡
          </p>

          <button className="mt-6 bg-red-600 hover:bg-red-700 transition-colors px-5 py-2 rounded-md text-white text-sm font-semibold">
            Edit Profile
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
