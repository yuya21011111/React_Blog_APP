import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'
import Blog from './components/Blog'
import Createpost from './components/Createpost'
import Login from './components/Login'
import Logout from './components/Logout'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='Blog' element={<Blog />}></Route>
        <Route path='/createpost' element={<Createpost />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
