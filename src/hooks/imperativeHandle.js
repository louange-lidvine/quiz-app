import React,{useRef} from "react";
import Button from "./button";
const ImperativeHandle=()=>{
    const buonRef=useRef(null)
  return(
    <div>
        <button onClick={()=>{buonRef.current.alterToggle()
        }}> button of parent</button>

           
            
        <Button ref={buonRef}/> 
        
    </div>
  )
}
export default ImperativeHandle;