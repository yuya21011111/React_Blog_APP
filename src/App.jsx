import './App.css'
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'
import Blog from './components/Blog'
import Createpost from './components/Createpost'
import Login from './components/Login'
import Logout from './components/Logout'
import Navbar from './components/Navbar'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <>
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='Blog' element={<Blog />}></Route>
        <Route path='/createpost' element={<Createpost />}></Route>
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route path='/logout' element={<Logout setIsAuth={setIsAuth} />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
