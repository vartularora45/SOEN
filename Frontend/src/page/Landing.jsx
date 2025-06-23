// Ultra-Stylized Landing.jsx with Glitch Effects, Glow Buttons, and Cyber Aesthetics
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Landing = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    const audio = new Audio("/sfx/startup-glitch.mp3");
    audio.play();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden font-mono text-red-500">
      <MatrixCode />

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold text-red-500 relative font-orbitron uppercase tracking-widest"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="glitch" data-text="AI-Powered Blog Generator On Steroids 🚀🔥">
            AI-Powered Blog Generator On Steroids 🚀🔥
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-red-400 text-lg sm:text-xl drop-shadow-md leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Unleash the beast of content creation. Type your thoughts — watch them evolve into explosive, SEO-packed blog gold. AI-fueled. Lightning-fast. Beyond human.
        </motion.p>

        <motion.div
          className="mt-10 flex gap-6 flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <button
            onClick={() => (window.location.href = "/login")}
            className="bg-red-600 text-black font-bold py-3 px-8 rounded-xl shadow-xl hover:shadow-red-600/80 hover:glow transition-all duration-300 uppercase tracking-wider font-orbitron"
          >
            Get Started
          </button>
          <button
            onClick={() => alert("Brace yourself. More power coming soon...")}
            className="border-2 border-red-500 text-red-500 py-3 px-8 rounded-xl font-bold hover:bg-red-900 hover:bg-opacity-30 transition-all duration-300 uppercase tracking-wider font-orbitron"
          >
            Learn More
          </button>
        </motion.div>

        <motion.div
          className="mt-14 w-11/12 max-w-2xl  border-red-700 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md hover:shadow-red-600/60 transition-shadow duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          
        </motion.div>
      </div>

      {/* Additional Styles */}
      <style jsx>{`
        .glitch {
          position: relative;
          color: #ff1a1a;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          width: 100%;
          overflow: hidden;
          color: #ff1a1a;
          clip: rect(0, 900px, 0, 0);
        }

        .glitch::before {
          animation: glitchTop 1.5s infinite linear alternate-reverse;
        }

        .glitch::after {
          animation: glitchBottom 1.5s infinite linear alternate-reverse;
        }

        @keyframes glitchTop {
          0% {
            clip: rect(0, 9999px, 0, 0);
          }
          10% {
            clip: rect(0, 9999px, 5px, 0);
          }
          20% {
            clip: rect(0, 9999px, 3px, 0);
          }
          100% {
            clip: rect(0, 9999px, 0, 0);
          }
        }

        @keyframes glitchBottom {
          0% {
            clip: rect(0, 9999px, 0, 0);
          }
          10% {
            clip: rect(5px, 9999px, 10px, 0);
          }
          20% {
            clip: rect(3px, 9999px, 7px, 0);
          }
          100% {
            clip: rect(0, 9999px, 0, 0);
          }
        }

        .hover\\:glow:hover {
          box-shadow: 0 0 10px #ff1a1a, 0 0 20px #ff1a1a, 0 0 30px #ff1a1a;
        }
      `}</style>
    </div>
  );
};

const MatrixCode = () => {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    const letters = "01".split("");
    const fontSize = 14;
    let columns;
    let drops;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = new Array(columns).fill(1);
    };

    const draw = () => {
      if (!ctx) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ff1a1a";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    document.body.appendChild(canvas);
    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.zIndex = 0;
    canvas.style.pointerEvents = "none";

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      document.body.removeChild(canvas);
    };
  }, []);

  return null;
};

export default Landing;
