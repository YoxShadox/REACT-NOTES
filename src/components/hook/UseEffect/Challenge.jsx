import { useEffect, useState } from "react";

export const Challenge = () =>{

    const[count, setCount]=useState(0)
    const[name,setName]= useState("")

    useEffect(()=> {
        console.log("Count Value",count);
    }, [count]);
      
    useEffect(()=>{
        document.title=`count:${count}`;
    },[count]);
    
    useEffect(()=>{
        console.log(name);
    },[name]);

    return(
        <div>
            <h1> useEffect Challenge</h1>
            <p>Count:{count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <input type="text" 
            name="name"
            value={name} 
            onChange={(e)=> setName(e.target.value)}
            />
        </div>
    );
};