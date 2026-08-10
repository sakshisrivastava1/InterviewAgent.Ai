import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectToDb from './config/connectToDB.js'
connectToDb();
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from './routes/authRoute.js'
import userRoute from "./routes/userRoute.js";
import interviewRoute from "./routes/interviewRoute.js";
import paymentRoute from "./routes/paymentRoute.js";

const app = express()
const PORT = process.env.PORT || 6000

app.use(cors({
    origin: "https://interviewagent-ai.onrender.com",
    credentials: true
}))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get("/", (req, res) => {
    res.send("Hello from server")
})

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/interview', interviewRoute)
app.use('/api/payment', paymentRoute)

app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})
