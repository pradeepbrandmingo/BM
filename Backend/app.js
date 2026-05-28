// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import helmet from "helmet";
// import morgan from "morgan";
// import cookieParser from "cookie-parser";

// import authRoutes from "./routes/authRoutes.js";
// import blogRoutes from "./routes/blogRoutes.js";
// import dashboardRoutes from "./routes/dashboardRoutes.js";

// dotenv.config();

// const app = express();

// // ================= SECURITY =================
// app.use(helmet());

// // ================= LOGS =================
// app.use(morgan("dev"));

// // ================= BODY PARSER =================
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ================= COOKIE =================
// app.use(cookieParser());

// // ================= CORS =================
// const allowedOrigins = [process.env.CLIENT_URL, "http://localhost:5173"];
// console.log("CLIENT_URL:", process.env.CLIENT_URL);
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // allow requests with no origin
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("CORS Not Allowed"));
//       }
//     },
//     credentials: true,
//   }),
// );

// // ================= ROOT ROUTE =================
// app.get("/", (req, res) => {
//   res.send("Backend Running 🚀");
// });

// // ================= ROUTES =================
// app.use("/api/auth", authRoutes);
// app.use("/api/blogs", blogRoutes);
// app.use("/api/dashboard", dashboardRoutes);

// export default app;

// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import helmet from "helmet";
// import morgan from "morgan";
// import cookieParser from "cookie-parser";

// import authRoutes from "./routes/authRoutes.js";
// import blogRoutes from "./routes/blogRoutes.js";
// import dashboardRoutes from "./routes/dashboardRoutes.js";

// dotenv.config();

// const app = express();

// // ================= CORS =================
// const allowedOrigins = ["http://localhost:5173", process.env.CLIENT_URL];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   }),
// );

// // ================= SECURITY =================
// app.use(helmet());

// // ================= LOGS =================
// app.use(morgan("dev"));

// // ================= BODY PARSER =================
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ================= COOKIE =================
// app.use(cookieParser());

// // ================= ROOT ROUTE =================
// app.get("/", (req, res) => {
//   res.send("Backend Running 🚀");
// });

// // ================= ROUTES =================
// app.use("/api/auth", authRoutes);
// app.use("/api/blogs", blogRoutes);
// app.use("/api/dashboard", dashboardRoutes);

// export default app;

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

dotenv.config();

const app = express();

// ================= CORS =================
const allowedOrigins = ["http://localhost:5173", process.env.CLIENT_URL];

app.use(
  cors({
    origin: function (origin, callback) {
      console.log("Request Origin:", origin);

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS Not Allowed"));
      }
    },
    credentials: true,
  }),
);

// ================= SECURITY =================
app.use(helmet());

// ================= LOGS =================
app.use(morgan("dev"));

// ================= BODY PARSER =================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ================= COOKIE =================
app.use(cookieParser());

// ================= ROOT ROUTE =================
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

// ================= ROUTES =================
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/dashboard", dashboardRoutes);

export default app;
