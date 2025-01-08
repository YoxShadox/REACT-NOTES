import { useState } from "react";

export const States= () =>{
    // let value = 0;
    // const handleButtonClick = () => {
    //     value++;
    //     console.log(value);
    // };
    const [count, setCount] = useState(0);
     const handleButtonClick = () => {
          setCount(()=> count +1);
     };
  
    return(
        <>
          <section>
          <h1>{count}</h1>
          <button onClick={handleButtonClick}>Increment</button>
          </section>
        </>
    );
};

