import React,{createContext, useState} from "react";
import Login from "./login";
import User from "./user";
export const AppContext=createContext(null)
const ContextTutorial=()=>{
const[username,setUsername]=useState("")
return(
    <AppContext.Provider value={{username,setUsername}}>
        <Login/>
        <User/>

    </AppContext.Provider>
)
}
export default ContextTutorial

