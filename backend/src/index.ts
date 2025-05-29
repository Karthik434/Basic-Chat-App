import express from "express"
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"


dotenv.config()
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)


app.listen(5000,()=>{
  console.log("Server is Running")
})