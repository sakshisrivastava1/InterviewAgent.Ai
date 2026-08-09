import express from 'express'
import { analyzeResume,generateQuestion,submitAnswer,finishInterview,getMyInterviews,getInterviewReport } from '../controllers/interview.js';
import { upload } from '../middlewares/multer.js';
import isAuth from '../middlewares/isAuth.js';

const interviewRoute = express.Router();

interviewRoute.post('/resume',isAuth,upload.single('resume'), analyzeResume)
interviewRoute.post("/generate-questions",isAuth,generateQuestion)
interviewRoute.post("/submit-answer",isAuth,submitAnswer)
interviewRoute.post("/finish",isAuth,finishInterview)

interviewRoute.get("/get-interview",isAuth,getMyInterviews)
interviewRoute.get("/report/:id",isAuth,getInterviewReport)



export default interviewRoute