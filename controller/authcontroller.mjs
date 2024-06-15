// using jwt authentication
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcryptjs";
import { createUser, getUserbyEmail } from "./usercontroller.mjs";
import { getUserbyId } from "./usercontroller.mjs";

export const registers = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    res.status(200).json("All feilds are required");
  //using bycrypt to create hash of password
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await createUser(name, email, hashedPassword);
    res
      .status(201)
      .json({ message: "userCreated Succesfully", userId: result.id });
  } catch (error) {
    res.status(400).json("there is error with the backend");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) res.status(200).json("all feilds are required");
  try {
    const user = getUserbyEmail(email);
    const check = bcrypt.compare(password, user.password);
    if (check) {
      console.log(check);
      const token = jwt.sign({ id: user.id }, "yash123", { expiresIn: "1h" });
      res.json({ token });
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export const Profile = async (req, res) => {
  try {
    const id = req.body.id; //id require to see the profile
    if (!id) res.status(404).json("user not found");
    try {
      const result = await getUserbyId(id);
      console.log(result.data);
      res.status(400).json("user profile", result.data);
    } catch (error) {
      res.json("server error");
    }
  } catch (error) {
    console.log("error ;", error);
    res.status(403).json("Token is expire plz login first");
  }
};
