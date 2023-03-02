// import React, { useEffect, useState } from "react";

// function Fetchadata() {
//   const [post, setPost] = useState(null);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((data) => data.json())
//       .then((data) => {
//         setPost(data);
//       });
//   });

//   return (
//     <div>
//       {post ? (
//         <ul>
//           {post.map((post) => {
//      return (
//        <div className=" bg-slate-400">
//           <li className="mt-2 ml-2 font-bold">id:{post.id}</li>
//          <li className="mt-2 font-bold text-center">{post.title}</li>
//          <li className="w-1/2 mt-2 text-justify">{post.body}</li>
//        </div>
//      );
//    })}
//         </ul>
//       ) : (
//         <h1 className="text-center my-96 animate-bounce">Loading.....</h1>
//       )}
//     </div>
//   );
// }

// export default Fetchadata;

import axios from "axios";
import React, { useEffect, useState } from "react";

function Fetchadata() {
  const [post, setPost] = useState();
  const [search,setSearch]=useState("")
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      /// axios  is library api la irrutnhu data kondu varathuku

      setPost(res.data);
    });
  }, []);
  // useEffect(()=>{
  //   fetch("https://jsonplaceholder.typicode.com/comments")    // fetch data api la irrunthu data fetch pannurathuku
  //   .then((data)=> data.json)
  //   .then((data)=>{
  //     setPost(data)
  //   })
  // })

  //  fetch("")
  //  .then((data)=> data.json())
  //  .then((data)=>{

  //  setPost(data)

  //  });

  return (
    <div>
      <h1 className="p-3 font-bold text-center bg-slate-400">API DATA FETCH</h1>

      <input onChange={(e)=>setSearch(e.target.value)} className="p-2 my-10 border border-blue-600 outline-none mx-96" type={"text"} placeholder={"enter your name"}/>
      {post ? (
        <>
          <ul>
            {/* {post.map((post)=>{
return(
<div>
<li>{post.name}</li>
<li>{post.email}</li>
</div>
);
})} */}
            {post.filter((data)=>{
              if(search ===""){
                return data
              }

              else if(data.body.toLowerCase().includes(search.toLocaleLowerCase()));{
                return data
               
              }
            }).map((data) => {
              return (
                <div
                  className="w-1/2 m-2 mx-auto text-justify bg-blue-300 border border-black shadow"
                  key={data.id}
                >
                  <li className="p-2">
                    <span className="p-2 font-bold">Id:</span>
                    {data.id}
                  </li>
                  <li className="p-2">
                    <span className="p-2 font-bold">Name:</span>
                    {data.name}
                  </li>
                  <li className="p-2">
                    <span className="p-2 font-bold">Mail:</span>
                    {data.email}
                  </li>
                  <li className="p-2">
                    <span className="p-2 font-bold">Comment:</span>
                    {data.body}
                  </li>
                </div>
              );
            })}
          </ul>
        </>
      ) : (
        <div className="text-center my-96">
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 mr-3 text-blue animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Loading...
        </div>
      )}
    </div>
  );
}

export default Fetchadata;
