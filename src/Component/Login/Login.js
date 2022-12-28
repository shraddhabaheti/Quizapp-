import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
export default function Login() {
  const navigate = useNavigate();

  const[userName,setUserName]=useState('')
  
  const onSubmit = (e) => {
    e.preventDefault();
  
   console.log("user",userName)
   setUserName(userName);
    navigate('/quizStart')
   
  }
  let user=localStorage.setItem("userName",userName)
  return (
    <div className='div1'>
      <form className='Login' onSubmit={onSubmit}>
        <div className='div2' >
        <div>
          <label className='label1'>Username</label>
          <input className='input1' type="text" name='Username' onChange={(e)=>{setUserName(e.target.value)}}  /><br />
          </div>
         <button className='button' type='submit'>submit</button>
        </div>
      </form>
    </div>
  )
}
