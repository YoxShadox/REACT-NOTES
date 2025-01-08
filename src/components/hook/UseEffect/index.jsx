// import { useEffect } from "react";

// export const ReactUseEffect = () =>{
//     useEffect(()=> {
//         console.log("Hello useEffect");
//     }, []);
//     return(
//         <div>
//             <h1>Hello, useEffect!</h1>
//         </div>
//     );
// };


// import { useEffect, useState } from "react";

// export const ReactUseEffect = () =>{

//     const[count, setCount]=useState(0)

//     useEffect(()=> {
//         console.log("Count Value",count);
//     }, [count]);

//     return(
//         <div>
//             <h1>Hello, useEffect!</h1>
//             <p>Count:{count}</p>
//             <button onClick={()=>setCount(count+1)}>Increment</button>
//         </div>
//     );
// };


import { useEffect, useState } from "react";

export const ReactUseEffect = () => {
    const [date, setData] = useState(0);

    useEffect(() => {
        setInterval(() => {
            const updatedDate = new Date();
            setData(updatedDate.toLocaleTimeString());
        }, 1000);
    }, [date]);

    return (
        <div>
            <h1>Date:{date}</h1>
        </div>
    );
};