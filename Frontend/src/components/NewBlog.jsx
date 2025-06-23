import React, { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const NewBlog = () => {
  const [prompt, setPrompt] = useState("");
  const [blog, setBlog] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [tone, setTone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleGenerate = async (e) => {
    e.preventDefault();

    if (!prompt || !selectedTemplate || !tone) {
      setError("⚠️ Please fill in all fields.");
      return;
    }

    setLoading(true);
    setBlog("");
    setError("");
    setSuccess("");

    const blogData = {
      topic: prompt,
      template: selectedTemplate,
      tone: tone,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/blog/createBlog",
        blogData
      );
      setBlog(response.data.blog);
      setSuccess("✅ Blog generated successfully!");
    } catch (error) {
      console.error("Error generating blog:", error);
      const msg =
        error?.response?.data?.message ||
        "❌ Failed to generate blog. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-xxl mx-auto p-6 rounded-xl border border-red-600 bg-gradient-to-tr from-black via-zinc-900 to-black backdrop-blur-lg text-white shadow-2xl"
    >
      <motion.h2
        variants={childVariants}
        className="text-3xl font-extrabold mb-6 text-red-500 flex items-center gap-2 drop-shadow-[0_0_5px_rgba(255,0,0,0.8)]"
      >
        <Sparkles className="text-red-400 animate-pulse" /> Generate an AI Blog
      </motion.h2>

      <motion.div variants={childVariants} className="relative mb-4">
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Write your topic for blog ...."
          className="peer w-full resize-none h-60 text-lg p-3 rounded-md border border-red-500 bg-black/40 text-white focus:outline-none focus:ring-2 focus:ring-red-500 backdrop-blur"
        />

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <select
            className="bg-black border-2 border-red-600 rounded hover:border-gray-400 text-white p-2"
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
          >
            <option value="" disabled>
              📋 Select Template
            </option>
            <option value="listicle">Listicle</option>
            <option value="howto">How-to</option>
            <option value="story">Story</option>
            <option value="review">Review</option>
            <option value="casestudy">Case Study</option>
          </select>

          <select
            className="bg-black border-2 border-red-600 rounded hover:border-gray-400 text-white p-2"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option value="" disabled>
              🎯 Select Tone
            </option>
            <option value="friendly">😊 Friendly</option>
            <option value="professional">👔 Professional</option>
            <option value="humorous">🤣 Humorous</option>
            <option value="technical">🧠 Technical</option>
            <option value="persuasive">💡 Persuasive</option>
          </select>
        </div>
      </motion.div>

      <form onSubmit={handleGenerate}>
        <motion.button
          variants={childVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
          className="mt-3 w-full bg-gradient-to-r from-red-600 to-red-800 hover:brightness-125 transition rounded-lg py-2 font-semibold flex justify-center items-center gap-2 disabled:opacity-50 shadow-md"
        >
          {loading ? (
            <Loader2 className="animate-spin" size={18} />
          ) : (
            "🚀 Generate"
          )}
        </motion.button>
      </form>

      {/* Feedback Messages */}
      {error && <p className="text-red-400 mt-2">{error}</p>}
      {success && <p className="text-green-400 mt-2">{success}</p>}

      <AnimatePresence>
        {blog && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-6 border border-red-700 rounded-xl p-4 bg-gradient-to-br from-zinc-800/60 to-zinc-900/70 backdrop-blur-xl shadow-xl"
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-red-400 font-bold"
            >
              {blog.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xs text-red-300 mb-3"
            >
              {blog.date}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-white leading-relaxed"
            >
              {blog.content}
            </motion.p>

            {/* Copy to Clipboard */}
            <motion.button
              onClick={() => navigator.clipboard.writeText(blog.content)}
              whileHover={{ scale: 1.05 }}
              className="mt-3 text-xs underline text-red-400 hover:text-red-300"
            >
              📋 Copy Blog Content
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NewBlog;
