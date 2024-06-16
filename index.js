import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/authroutes.js";
import userRoutes from "./routes/userroutes.js";

const app = express();
app.use(bodyParser.json());
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

const port = 3000;
app.listen(port, () => {
  console.log("your backend server is at http://localhost", port);
});
