import React, { useEffect, useState } from 'react'
import axios from 'axios'

function SearchData() {
    const [nameList,setNameList]=useState([])
    const [search,setSearch]=useState("")
    const handle =()=>{
      console.log(search)
    }
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=500`)
        .then((response)=>{
            setNameList(response.data.results)
        })
    },[])   
  return (
    <div className='bg-blue-700 '>
      <h1 className='mx-auto font-bold tracking-wider text-center uppercase'>api fetching</h1>
      <div className='ml-96'>
      <input type={"text"} className="p-2 m-2 placeholder-black rounded placeholder:font-serif " placeholder={"search the name . . ."} onChange={(e)=> setSearch(e.target.value)}/>
      <button className='px-2 font-bold text-white bg-purple-900 rounded hover:bg-purple-700' onClick={handle}>click</button>
      </div>
      {nameList.filter((item)=>{
        if(search === ""){
          return item
        }
        else if(item.name.toLowerCase().includes(search.toLowerCase())){
            return item
        }
      }).map((item)=>{
        return <div className='flex justify-center ' key={item.name}> <h1 className='p-2 font-bold '>{item.name}</h1> </div>
      })}
    </div>
  )
}

export default SearchData