import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Blog from "../db/blog.model.js";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const buildPrompt = (topic, template, tone) => {
  const prompts = {
    listicle: `Write a listicle blog on "${topic}" in a ${tone} tone.`,
    howto: `Write a how-to blog on "${topic}" in a ${tone} tone.`,
    story: `Write a story-based blog on "${topic}" in a ${tone} tone.`,
    review: `Write a review blog on "${topic}" in a ${tone} tone.`,
    casestudy: `Write a case study blog on "${topic}" in a ${tone} tone.`,
  };
  return prompts[template] || `Write a blog on "${topic}" in a ${tone} tone.`;
};

export const createBlog = async (req, res) => {
  try {
    const { topic, template, tone } = req.body;

    const prompt = buildPrompt(topic, template, tone);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(prompt);
    const response =  result.response;
    const blogText = response.text();


    const newBlog = new Blog({ topic, template, tone, blogText});
    await newBlog.save();

    res.status(200).json({ blog: blogText });
  } catch (err) {
    console.error("Blog generation error:", err.message);
    res.status(500).json({ error: "Failed to generate blog." });
  }
};




export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(blogs);
  } catch (err) {
    console.error("Error fetching blogs:", err.message);
    res.status(500).json({ error: "Failed to fetch blogs." });
  }
};


