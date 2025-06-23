import User from "../db/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    //validation if user already exists
    if(!username || !email || !password || !role){
        return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ username,email });
    if(user){
        return res.status(400).json({ message: "User already exists" });
    }

    const Newpassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: Newpassword,
      role,
    });
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    newUser.token = token;
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    console.log(newUser);

    await newUser.save();

    res.status(201).json({ message: "user created Successfully" , token, newUser});
  } catch (error) {
    console.log(error);

    res.status(500).json({ error, message: "Internal Server Error" });
  }
};



export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
        }
    
        const user = await User.findOne({ email });
        if (!user) {
        return res.status(404).json({ message: "User not found" });
        }
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
        return res
          .status(401)
          .json({
            message: "Invalid credentials - Please check your email and password",
           
          });
        }
    
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
        });
      
        user.token = token;
        res.cookie("token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        });
    
        res.status(200).json({ message: "Login successful", user , token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }

}

export const DeleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.token = null; // Clear the token from the cookie
        res.clearCookie("token", {
            
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        });
        res.status(200).json({ message: "User deleted successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

