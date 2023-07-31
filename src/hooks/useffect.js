import React,{useEffect, useState} from "react";
import axios from "axios" 
const EffectTutorial=()=>{
    const [data,setData]=useState("")
    const[counter,setCounter]=useState(0)
    useEffect(()=>{
        // console.log("hello dear")
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            console.log(response.data)
            setData(response.data[0].email)
               console.log("api was called")
        },)

    },[counter])
     return (
        <div>
     <p> hello friend{data}</p>
     <p>{counter}</p>
     <button onClick={setCounter(counter+1)}>
        click here
     </button>
        </div>
     )
}
export default EffectTutorial