import {jwtDecode} from "jwt-decode"


function Auth() {

  
        const token= localStorage.getItem("token");
        if(!token)return null;
        return jwtDecode(token);
        


  
  
}

export default Auth