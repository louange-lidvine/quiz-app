import React, { forwardRef, useImperativeHandle,useState } from "react";
const Button=forwardRef((props,ref)=>{
   const[toggle,setToggle]=useState(false)
   useImperativeHandle(ref,()=>({
    alterToggle(){
           setToggle(!toggle)
    }
   }))
 return(
    <div>
        <button>button of child</button>
        {toggle &&<p>toggle</p>}
    </div>
   )
})
export default Button