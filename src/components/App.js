
import React,{useState} from "react";
import './../styles/App.css';
import LoginForm from "./LoginForm";
const App = () => {
  let [isLoggedIn,setIsLoggedIn]= useState(false);
  return (
    <div>
        <h1>Parent Component</h1>
    
        {isLoggedIn && <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
    </div>
  )
}

export default App
