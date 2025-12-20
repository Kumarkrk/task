import React from 'react'
import axios from 'axios';
import { useState } from 'react';

function Signup() {
    const[form,setForm]=useState({email:"",password:"",role:"User"});
    const handle=async (e)=>
    {
        e.preventDefault();
        const res=await axios.post("https://task-4-6f1r.onrender.com/signup",form);
        localStorage.setItem("token",res.data.token);
        alert("signup sucessfully");
        setForm({email:"",password:"",role:"User"});
        window.location.reload();
    }

  return (
    <div>
    <div className="signup-container">
      <div className="signup-card">
        <form onSubmit={handle}>
          <h1 style={{color:"red",textAlign:"center"}}>signup</h1>
            <label htmlFor='k1'>Enter Your email:</label>
            <input type='email'  id="k1" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
          
            <label htmlFor='k2'> Enter your password:</label>
            <input type='password' id="k2"  value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})}/>
           
            <label htmlFor="k">select your role:</label>
            <select value={form.role} onChange={(e)=>setForm({...form,role:e.target.value})} id="k">
                <option value="User">User</option>
                <option value="Admin">Admin</option>
            </select>
           
            <button>submit</button>
            </form>
            </div>
    </div>


    </div>
  )
}

export default Signup
