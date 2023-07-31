import React from "react";
import { useCallback,useState } from "react";
import CreateUse from "./used";
const CallbackTutorial=()=>{
    const[data,setData]=useState("hello world")
    const [toggle,setToggle]=useState(false)
const createUse=(name)=>{
    return data

}
 return(
    <div>
    <p>{createUse}</p>
    <button onClick={
        ()=>{
            setToggle(!toggle)
        }
    }>
        Toggle

    </button>

    {toggle&&<p>toggle</p>}
    </div>
 )

 }
export default CallbackTutorial