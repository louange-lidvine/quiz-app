import React,{useState} from "react";
const StateTutorial=()=>{
//    const[counter,setCounter]=useState(0)

//    const increment=()=>{
//     setCounter(counter+1)
   
//    }
//    return <div>{counter}<button onClick={increment}>increment</button></div>
// }

const [newInput,setnewInput]=useState("")
const change=(event)=>{
    const newValue=event.target.value
    setnewInput(newValue)
}
return (
    <div>
<input placeholder="type your name here...." onChange={change}  ></input>
<p>user:{newInput}</p>
    </div>
)
// const [counter,setCounter]=useState(0)
// const[text,setText]=useState(true)
// return(
//     <div>
//         <p>{counter}</p>
//         <button onClick={()=> {
//             setCounter(counter + 1);
//             setText(!text);
//         }}
//             >
//                 click here
//                 </button>

//     {text&&<p>my first text</p>}
//     </div>
// )
    }

export default StateTutorial 