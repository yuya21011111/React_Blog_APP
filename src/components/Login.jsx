import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Login = ({ setIsAuth  }) => {
  const navigate = useNavigate()
  const loginGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      localStorage.setItem('isAuth', true)
      setIsAuth(true)
      navigate('/')
    })
  }
  return (
    <div>
      <p>ログインをする</p>
      <button onClick={loginGoogle} className='border border-sky-500 bg-sky-500 text-white px-2 py-4 rounded-full'>Googleでログインする</button>
    </div>
  )
}

export default Login