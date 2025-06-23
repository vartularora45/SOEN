import mongoose from "mongoose";


const BlogSchema = new mongoose.Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    content: {
      type: String,
     
    },
    template: {
      type: String,
      required: true,
    },
    blogText :{
       type: String,
      
    },
    tone: {
      type: String,
      required: true,
    },

    date: {
      type: String,
    
    },
  },
  [{ timestamps: true }]
);

const Blog = mongoose.model("blog", BlogSchema);



export default Blog;
