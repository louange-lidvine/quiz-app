import React,{useRef} from "react";
const RefTutorial=()=>{
    const inputRef=useRef(null)
    const onclick=()=>{
        inputRef.current.focus();
        // inputRef.current.value="";

    }
return(
    <div>
   <input type="text" placeholder="ex..." ref={inputRef}/>
   <button onClick={onclick}>change Name</button>
   </div>
)
}
export default RefTutorial
