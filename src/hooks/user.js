import React, { useContext } from "react";
import { AppContext } from "./useContext";
const User=()=>{
    const {username}=useContext(AppContext)
    return(
        <div>
            <p>user:{username}</p>
        </div>
    )
}
export default User