import express from "express"
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"


dotenv.config()
const app = express()

const PORT = process.env.PORT||5000

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)


app.listen(PORT,()=>{
  console.log("Server is Running")
})