import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/home.jsx'
import Login from './components/login/login'
import SignUp from './components/signUp/signUp'
import { useEffect, useState } from 'react'
import { auth } from './firebase'
import Navbar from './components/navbar/Navbar'

function App() {
  const [userName, setUserName] = useState('')
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName)
      } else setUserName('')
    })
  }, [])
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home name={userName} />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
