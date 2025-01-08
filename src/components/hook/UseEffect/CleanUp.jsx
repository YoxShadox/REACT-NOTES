import { useEffect } from "react";
import { useState } from "react";

export const CleanUp = () =>{
    const [count, setCount] = useState(0);

    useEffect(() =>{
        const timer = setInterval(() =>{
            setCount((prev) => prev + 1);
        },1000);

        return () => clearInterval(timer);
    },[]);


return (
    <div>
        <h1>Count</h1>
        <h2>{count}</h2>
    </div>
)
}