// import React, { useMemo, useState } from "react";
// import { useEffect } from "react";
// const UseMemoTutorial=()=>{
//     const[data,setData]=useState("")
//     useEffect(()=>{
//       axios
//       .get()
//       .then((response)=>{
//         setData(response.data)
//       },[])
//       const longName=(comment)=>{
//       if(!comment) return null
//       const longestName=""
//       for(i=0;i<comment.length;i++){
//         let currentName=comments(i).name
//         if (currentName.length>longestName.length){
//             longestName=currentName
//         }
      
//       }
//       console.log("api called")
//       }
          
//     })
//     const getMemo=useMemo(()=>{longName(data),[data]})
//     return(
//         <div>
//             <div>{getMemo}</div>
//         </div>
//     )
// }