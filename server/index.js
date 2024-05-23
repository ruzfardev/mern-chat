import express from "express";
import dotenv from "dotenv";

import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/index.js";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import userConversationsRoutes from "./routes/userConversation.routes.js";
const app = express();
const PORT = process.env.PORT || 3001;

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.use("/api/conversations", userConversationsRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
