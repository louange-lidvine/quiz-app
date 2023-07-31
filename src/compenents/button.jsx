export default function Button(color,text){
    // const onclick=(e)=>{
    //     console.log('click')
    // }
    return(
        <button 
        style={{backgroundColor:color}} className="btn">
        <h1>{text}</h1>

        </button>
    )
}