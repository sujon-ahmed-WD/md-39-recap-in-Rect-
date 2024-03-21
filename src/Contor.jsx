import { useState } from "react";

export default function Counter(){
    const [count,setCount]=useState(0)
    const handaler=()=>{
        const newCount=count+1;
        setCount(newCount)
    }
    const alhamdullah=()=>{
        const newCount=count-1;
        setCount(newCount)
    }
   
   
    return(
    <div style={{border:'2px solid green'}}>
              <h1>Counter: {count}</h1>
              <button onClick={handaler}>Subahanallah</button>
              <button onClick={alhamdullah}>ALhamduallah</button>
              </div>
      
    )
}