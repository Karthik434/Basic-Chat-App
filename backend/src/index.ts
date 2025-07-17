import express from "express";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
import path from "path";
import { Request,Response,NextFunction } from "express";

dotenv.config();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

// Add error handling for route registration
try {
    app.use("/api/auth", authRoutes);
    console.log("Auth routes registered successfully");
} catch (error) {
    console.error("Error registering auth routes:", error);
}

try {
    app.use("/api/messages", messageRoutes);
    console.log("Message routes registered successfully");
} catch (error) {
    console.error("Error registering message routes:", error);
}

// Catch-all error handler for routes
app.use((err:any, req:Request, res:Response, next:NextFunction) => {
    console.error("Route error:", err);
    res.status(500).json({ error: "Internal server error" });
});

// Static file serving for production
if (process.env.NODE_ENV !== "development") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
    });
}

server.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
});