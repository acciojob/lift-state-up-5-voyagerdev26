import React from "react";

const LoginForm=({setIsLoggedIn})=>{
  return (
    <form onSubmit={(e)=>{e.preventDefault();setIsLoggedIn(true);}}>
      <label>Username:</label>
      <input type="text"  />
      <label>Password:</label>
      <input type="text"  />
      <br>
      <button >Login</button>
    </form>
  )
}
export default LoginForm;