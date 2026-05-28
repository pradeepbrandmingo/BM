import jwt from "jsonwebtoken";

const protectAdmin = async (req, res, next) => {
  try {
    let token;

    // CHECK TOKEN
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      // VERIFY TOKEN
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // SAVE ADMIN DATA
      req.admin = decoded;

      next();
    } else {
      return res.status(401).json({
        success: false,
        message: "Not authorized, no token",
      });
    }
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Token failed",
    });
  }
};

export default protectAdmin;
