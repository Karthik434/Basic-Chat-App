import jwt, { JwtPayload } from "jsonwebtoken"
import { Request,Response,NextFunction } from "express"
import prisma from "../db/prisma.js"


declare global{
  namespace Express{
    export interface Request{
      userId :string
    }
  }
}

interface DecodedToken extends JwtPayload{
  userId: string
}
export const protectRoute = async(req:Request,res:Response,next:NextFunction)=>{
  try{
    const token = req.cookies.jwt
    if(!token){
      res.status(400).json({
        error: "Unauthorized - Invalid Token"
      })
      return
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET!) as DecodedToken
    if(!decoded){
      res.status(400).json({
        error: "Unauthorized - Invalid Token"
      })
      return
    }
    req.userId = decoded.userId
    next()
  }
  catch(error:any){
    console.log("Error in middleware route")
    res.status(400).json({
      error:"Internal server error"
    })
  }
}