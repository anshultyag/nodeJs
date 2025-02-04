import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))       // set limit to data send 
app.use(express.urlencoded({extended: true,limit: "16kb"}))      // set things to get data from url  
app.use(express.static("public"))     // to set assests (image, favicon Icon)
app.use(cookieParser())



//routes import
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users", userRouter)


// http://localhost:8000/api/v1/users/register

export { app }