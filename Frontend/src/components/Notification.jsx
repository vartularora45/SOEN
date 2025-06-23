import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, X } from "lucide-react";

const notifications = [
  "🚀 New blog published: 'AI Took My Job!'",
  "👽 The Matrix called. You’re late.",
  "🧠 Reminder: Train your neural network (and your brain).",
  "📚 Your AI learning streak is on fire 🔥",
  "🎤 AI just dropped a diss track on humanity.",
  "💾 Project autosaved in the cloud… hopefully.",
  "🔒 New login from unknown device: Mars 🪐",
];

const Notification = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * notifications.length);
    setMessage(notifications[randomIndex]);

    const timer = setTimeout(() => {
      setShow(true);
    }, 1000); // Show notification after 1 second

    const autoHide = setTimeout(() => {
      setShow(false);
    }, 6000); // Hide after 5 seconds

    return () => {
      clearTimeout(timer);
      clearTimeout(autoHide);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-4 border border-red-600 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-4 rounded-xl shadow-lg backdrop-blur-md text-white w-80"
          >
            <Bell className="text-red-500 mt-1" />
            <div className="flex-1">
              <p className="text-sm text-gray-100">{message}</p>
            </div>
            <button onClick={() => setShow(false)}>
              <X size={18} className="text-gray-400 hover:text-red-400 transition-colors" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Notification;
