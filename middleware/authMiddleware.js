import jwt from "jsonwebtoken";

export const authenticationJWT = async (req, res, next) => {
  try {
    const token = req.header("authoriation").replace("bearer", "");
    if (!token) {
      // in case any token are not provided
      res.json("token not provided");
    }

    jwt.verify(token, "yash123", (err, user) => {
      if (err) {
        res.status(403).json("invaid token");
      }
      req.user = user;
      next();
    });
  } catch (error) {
    console.log("error");
    res.status(500).json("INternal Server Error");
  }
};
