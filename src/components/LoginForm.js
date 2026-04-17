import React,{useState} from "react";

let LoginForm=({setIsLoggedIn})=>{
  let [name,setName]= useState("");
  let [pass,setPass]=useState("");
  return (
    <form onSubmit={(e)=>{e.preventDefault();
      if(name && pass){

        setIsLoggedIn(true);
      }
    
    }}>
      <label>Username:</label>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <label>Password:</label>
      <input type="text" value={pass} onChange={(e)=>{setPass(e.target.value)}} />
      <br>
      <button >Login</button>
    </form>
  )
}
export default LoginForm;