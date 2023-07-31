import React,{useLayoutEffect,useEffect,useRef} from "react";

const LayoutEffect=()=>{
    const inputRef=useRef(null)
    useLayoutEffect(()=>{
        console.log(inputRef.current.value)
    })
    useEffect(()=>{
        inputRef.current.value="RWEMA"
    })
    return(
   <div className="App">
    <input ref={inputRef} value="IVAN"/>
   </div>
    )

}
export default LayoutEffect;