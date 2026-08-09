import express from "express"
import isAuth from "../middlewares/isAuth.js"
import { createOrder, verifyPayment } from "../controllers/payment.js"



const paymentRoute = express.Router()

paymentRoute.post("/order" , isAuth , createOrder )
paymentRoute.post("/verify" , isAuth , verifyPayment )


export default paymentRoute