import React from 'react'
import './styles/loginForm.css'

const LoginForm = () => {
  return (
    <form method=''>
        <div class="formBlock">
        <label for="">username</label>
        <input type="text" name="" id="" placeholder='Enter Username'/>
        </div>
        <div class="formBlock">
            <label for="">password</label>
            <input type="password" name="" id="" placeholder='Enter your Password' />
        </div>
        <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm