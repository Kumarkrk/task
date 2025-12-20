import React from 'react'
import Data1 from './Data1'

function UserDashboard() {
    
  return (
    <div>

    <h1>
        UserDashboard
    </h1>
    <div className="data5">
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

export default UserDashboard