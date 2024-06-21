import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { createUser, getUserbyEmail } from "./usercontroller.mjs";
import { getUserbyId } from "./usercontroller.mjs";

export const registers = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await createUser(name, email, hashedPassword);
    return res
      .status(201)
      .json({ message: "User created successfully", userId: result.id });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "There is an error with the backend" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await getUserbyEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, "yash123", {
      expiresIn: "1h",
    });
    return res.json({ token });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "There is an error with the backend" });
  }
};

export const Profile = async (req, res) => {
  const { id } = req.user; // Assuming the user ID is decoded from JWT and available in req.user
  if (!id) {
    return res.status(404).json({ message: "User not found" });
  }

  try {
    const result = await getUserbyId(id);
    return res.json({ userProfile: result });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
