import express from "express";
import { getUserConversations } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/:userId", getUserConversations);
export default router;
