import React ,{useReducer}from "react";
const reducer=(state,action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return{counter:state.counter+1,text:state.text}
           
        case 'toggle-text':
            return {counter:state.counter,text:!state.text}
    
        default:
            return state
        
    }   
}
const ReducerTutorial=()=>{
    const[state,dispatch]=useReducer(reducer,{counter:0 ,text:true})

return (
    <div>
        <h1>{state.counter}</h1>
        <button onClick={()=>{
            dispatch({type:'INCREMENT'});
            dispatch({type:'toggle-text'})
        }}
        >CLICK HERE</button>
       {state.text && <p>this is my text</p>}
    </div>
)
    }
export default  ReducerTutorial 