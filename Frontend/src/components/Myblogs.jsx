import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const MyBlogs = () => {
  const sampleBlogs = [
    {
      title: "The Rise of Sentient Memes 🤖😂",
      content:
        "Memes are evolving. With AI generating context-aware humor, the line between human wit and machine sarcasm is blurring. Will your next LOL be AI-generated?",
      date: "28/05/2025",
    },
    {
      title: "Can AI Fall in Love? ❤️🤖",
      content:
        "While AI can't feel emotions, it can simulate affection scary well. From romantic chatbots to heartbreak playlists, it's raising some wild philosophical questions.",
      date: "27/05/2025",
    },
    {
      title: "ChatGPT Took My Job… And Then Gave Me a Better One 💼➡️🚀",
      content:
        "Lost a copywriting gig to AI? Same. But then I started teaching prompt engineering and now I'm balling. Adapt or get automated, fam.",
      date: "25/05/2025",
    },
    {
      title: "AI in Education: No More Homework? 📚🧠",
      content:
        "With AI tutors doing late-night math help and essay proofreading, students are learning smarter—not harder. Teachers? They're adapting too.",
      date: "23/05/2025",
    },
    {
      title: "Will AI Be the Next Rap God? 🎤🔥",
      content:
        "AI has been spitting bars better than SoundCloud rappers. But can it bring soul to the mic? The culture says no, but the charts say yes.",
      date: "20/05/2025",
    },
    {
      title: "From Algorithms to Aesthetics: AI's Takeover of Art 🖼️✨",
      content:
        "Digital canvases now echo with neural brushstrokes. From DALL·E to Midjourney, AI isn't just making art—it's redefining what art even means.",
      date: "18/05/2025",
    },
     {
      title: "From Algorithms to Aesthetics: AI's Takeover of Art 🖼️✨",
      content:
        "Digital canvases now echo with neural brushstrokes. From DALL·E to Midjourney, AI isn't just making art—it's redefining what art even means.",
      date: "18/05/2025",
    },
     {
      title: "From Algorithms to Aesthetics: AI's Takeover of Art 🖼️✨",
      content:
        "Digital canvases now echo with neural brushstrokes. From DALL·E to Midjourney, AI isn't just making art—it's redefining what art even means.",
      date: "18/05/2025",
    },
     {
      title: "From Algorithms to Aesthetics: AI's Takeover of Art 🖼️✨",
      content:
        "Digital canvases now echo with neural brushstrokes. From DALL·E to Midjourney, AI isn't just making art—it's redefining what art even means.",
      date: "18/05/2025",
    },
     {
      title: "From Algorithms to Aesthetics: AI's Takeover of Art 🖼️✨",
      content:
        "Digital canvases now echo with neural brushstrokes. From DALL·E to Midjourney, AI isn't just making art—it's redefining what art even means.",
      date: "18/05/2025",
    },
  ];

  return (
    <div className="h-[calc(100vh-48px)] dodo overflow-y-auto bg-gradient-to-br from-black via-gray-900 to-red-900 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-red-500 flex items-center gap-2">
          <Sparkles className="text-red-400" /> My Blogs
        </h2>

        {sampleBlogs.length === 0 ? (
          <p className="text-red-300 text-sm">
            No blogs found. Go generate some magic! 🪄
          </p>
        ) : (
          <div className="space-y-5 pb-6">
            {" "}
            {/* Added pb-6 for bottom padding */}
            {sampleBlogs.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-red-700 rounded-xl p-4 bg-gradient-to-br from-zinc-800/50 to-zinc-900/70 backdrop-blur-md shadow-lg"
              >
                <h3 className="text-xl text-red-400 font-bold">{blog.title}</h3>
                <p className="text-xs text-red-300 mb-2">{blog.date}</p>
                <p className="text-sm text-white leading-relaxed">
                  {blog.content}
                </p>
                <button
                  className="mt-4 self-start bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
                  onClick={() => alert(`Read more about: ${blog.title}`)}
                >
                  Read More
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default MyBlogs;
