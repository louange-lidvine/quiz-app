import React from "react";
import {useParams} from "react-router-dom"
const  Client=()=>{
 const {id}=useParams()
 return(
    <div>
        {/* clientStuff:{params} */}
       <h1>Client Stuff:{id}</h1>
    </div>
 )

}

export default Client;