import { use, useEffect, useState } from 'react';
import './App.css';
import React from 'react';

const Card=(props)=>{
  return <div className='card'>
    <img src={props.data.thumbnail} alt={props.data.brand}></img>
    <p>{props.data.title}</p>
  </div>
}

const App=()=>{
  const [result,setResult]=useState([])

  const[startPage,setStartPage]=useState(0);

  const FetchData=async()=>{
    const data=await fetch("https://dummyjson.com/products?limit=500")
    const json=await data.json()
    console.log(json.products)
    setResult(json?.products)
  }
  const page_size=10;
  const page_lenth=result.length;
  const pageNobers=Math.ceil(page_lenth/page_size)
  const Start=page_size*startPage;
  const End=Start+page_size
  useEffect(()=>{
    FetchData()
  },[])
  const pageHandle=()=>{
    setStartPage((prev)=>prev+1)
  }
  return <div className='App'>
    <h3>Pagination</h3>
    <div className='btn-container'>
    {/* <button onClick={(e)=>{prevPage()}}>◀</button> */}
      {[...Array(pageNobers).keys().map((x)=>{
        return <button onClick={(n)=>pageHandle(n)}>{x}</button>
      })]}
      <button>▶</button>
    </div>
    <div className='flex'>
    {result.slice(Start,End).map((x)=>{
      return <Card key={x.id} data={x}/>
    })}
    </div>
  </div>
}
export default App;
