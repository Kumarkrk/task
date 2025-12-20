import './App.css';

import Signup from './components/Signup.js';
import Login from './components/Login.js';
import { useState } from 'react';
import Auth from './components/middleware/Auth.js';
import AdminDashboard from './components/AdminDashboard.js';
import UserDashboard from './components/UserDashboard.js';
function App() {
  const[page,setPage]=useState(null);
const user=Auth();
if(!user){
  return(
    <div className="App">
        <button onClick={() => setPage("login")}>Login</button>
        <button onClick={() => setPage("signup")}>Signup</button>

        {page === "login" && <Login />}
        {page === "signup" && <Signup />}
      </div>
  );
}
if (user.role === "Admin") {
    return <AdminDashboard />;
  }

  if (user.role === "User") {
    return <UserDashboard />;
  }

  
 


 
}

export default App;
