import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUserData } from './redux/userSlice.js'
import InterviewPage from './pages/InterviewPage.jsx'
import InterviewHistory from './pages/InterviewHistory.jsx'
import Pricing from './pages/Pricing.jsx'
import InterviewReport from './pages/InterviewReport.jsx'

export const ServerUrl = "http://localhost:5000"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
     const getUser = async () => {
      try {
        const response = await axios.get(ServerUrl + '/api/user/current-user', { withCredentials: true })
        dispatch(setUserData(response.data))
        console.log('Current user:', response.data)

      } catch (error) {
        dispatch(setUserData(null))
        console.error('Error fetching current user:', error)
      }
    }

    getUser()
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path='/history' element={<InterviewHistory/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/report/:id' element={<InterviewReport/>}/>
      </Routes>
    </>
  )
}

export default App