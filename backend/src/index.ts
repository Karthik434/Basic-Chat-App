import express from "express"
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { app, server } from "./socket/socket.js"
import path from "path"
import expressListEndpoints from "express-list-endpoints";

dotenv.config()

const PORT = process.env.PORT||5000;
const __dirname = path.resolve();

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)

if (process.env.NODE_ENV !== "development") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
	});
}


console.log(expressListEndpoints(app));


server.listen(PORT,()=>{
  console.log("Server is Running")
})