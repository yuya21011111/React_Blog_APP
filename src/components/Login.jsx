import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'

const Login = () => {

  const loginGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      console.log('ログインしました。')
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