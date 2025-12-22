import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function Login() {
     const API_URL = "https://task-4-6f1r.onrender.com";
     const[form,setForm]=useState({email:"",password:""});
     const res = axios.post(
 `${API_URL}/user/login`,
  form
);

console.log("LOGIN RESPONSE:", res.data);
localStorage.setItem("token", res.data.token);
    const handle=async (e)=>
    {
        e.preventDefault();
        const res=await axios.post("https://task-4-6f1r.onrender.com/user/login",form);
        localStorage.setItem("token",res.data.token);
        alert("Login sucessfully");
        setForm({email:"",password:""});
        window.location.reload();


    }
  return (
    <div>
 <div className="login-container">
  <div className="login-card">
        <form onSubmit={handle}>
          <h1 style={{color:'orange' ,textAlign:"center"}}>login</h1>
            <label htmlFor='k1'>Enter your email:</label>
            <input type='text' id='k1' value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
        
            <label htmlFor='k2'>Enter your password:</label>
            <input type='text'id='k2' value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})}/>
            
           
            <button>submit</button>
            </form>
            </div>
    </div>


    </div>
  )
}

export default Login
