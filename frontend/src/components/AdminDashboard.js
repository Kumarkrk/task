import React from 'react'
import Data1 from './Data1'

function AdminDashboard() {
  return (
    <div>
    <h1> Admin Dashboard</h1>
    <div className="data3">
    <Data1/>
<button onClick={() => {
  localStorage.removeItem("token");
  window.location.reload();
}}>
  Logout
</button>
</div>
    </div>
  )
}

export default AdminDashboard