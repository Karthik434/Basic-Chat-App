import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getMessages, getUsersInSidebar, sendMessage } from "../controllers/messageController.js";
const router = express.Router();
router.get("/conversations", protectRoute, getUsersInSidebar);
router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessages);
export default router;
