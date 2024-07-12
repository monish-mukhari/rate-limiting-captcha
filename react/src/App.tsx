import { Turnstile } from '@marsidev/react-turnstile'
import './App.css'
import axios from 'axios'
import { useState } from 'react'

function App() {
  const [token, setToken] = useState<string>("");

  return (
    <>
      <input placeholder='OTP'></input>
      <input placeholder='New password'></input>
      <Turnstile onSuccess={(token) => {
        setToken(token)
      }} siteKey='0x4AAAAAAAe9avbqY0tRNP9R' />
      <button onClick={() => {
        axios.post("http://localhost:3000/reset-password", {
          email: "monishmukhari@gmail.com",
          otp: "123123",
          token: token
        })
      }}>Update password</button>
    </>
  )
}

export default App
