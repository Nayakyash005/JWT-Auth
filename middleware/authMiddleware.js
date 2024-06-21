import jwt from "jsonwebtoken";

export const authenticationJWT = async (req, res, next) => {
  try {
    const authHeader = req.header("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Token not provided" });
    }

    const token = authHeader.replace("Bearer ", "");
    console.log(token);

    jwt.verify(token, "yash123", (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Invalid token" });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
