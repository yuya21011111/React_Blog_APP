import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Logout = ({ setIsAuth  }) => {
  const navigate = useNavigate()
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      navigate('/login')
    })
  }
  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout} className='border border-red-500 bg-red-500 text-white px-2 py-4 rounded-full'>ログアウト</button>
    </div>
  )
}


export default Logout