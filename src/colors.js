import React from "react";
export default function Color({colors}) { 
  
    return(
       <div>
       <h1>
      COLORS LIST
       </h1>
       <p>{colors.join(',')}</p>
       </div>
    )
}