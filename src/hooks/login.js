import React, { useContext } from "react";
import { AppContext } from "./useContext";

const Login=()=>{
    const {setUsername}=useContext(AppContext)
    const change=(event)=>{
        setUsername(event.current.value)
    }
    return(
        <div>
           
            <input placeholder="enter user" onChange={change} />
         
            
        </div>
    )
}
export default Login