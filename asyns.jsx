import React, { useEffect } from "react";
import axios from "axios";

function Asyns() {
  const getData = async () => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return <div></div>;
}

export default Asyns;

// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// function Asyns() {
//     const [data,setData]=useState()
//     useEffect(()=>{
//     const getData = async ()=>{
//         try{
//             const data = await axios.get("https://jsonplaceholder.typicode.com/users");
//             setData(data)
//         } catch (e){
//             console.log(e);
//         }
//         getData();
// }},[] );

//   return (
//     <div>
//         {data ?

//     (<ul>
//         {data.map((data)=>{
//             return(
//                 <div>
//                 <li>{data.id}</li>
//                 <li>{data.name}</li>
//                 </div>
//             )
//         })}
//     </ul>):(<h1>loading.....</h1>)

//     }

//     </div>
//   )
// }

// export default Asyns
