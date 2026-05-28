import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

import Admin from "../models/Admin.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    // CHECK EXISTING ADMIN
    const existingAdmin = await Admin.findOne({
      email: "admin@brandmingo.com",
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit();
    }

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash("BrandMingo@2026", 12);

    // CREATE ADMIN
    const admin = new Admin({
      name: "Brandmingo Admin",
      email: "admin@brandmingo.com",
      password: hashedPassword,
    });

    await admin.save();

    console.log("Admin Created Successfully");

    process.exit();
  })
  .catch((err) => {
    console.log(err);
  });
