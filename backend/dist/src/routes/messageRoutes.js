import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getMessages, getUsersInSidebar, sendMessage } from "../controllers/messageController.js";
const router = express.Router();
router.get("/conversations", protectRoute, getUsersInSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);
export default router;
