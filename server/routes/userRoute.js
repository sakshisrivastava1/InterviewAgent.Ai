import express from 'express'
import { getCurrentUser } from '../controllers/user.js'
import isAuth from '../middlewares/isAuth.js'

const userRoute = express.Router();

userRoute.get('/current-user',isAuth ,getCurrentUser)

export default userRoute