import { useState } from "react";
import  {Counts} from "./MemoCount";

export const ReactMemo = () =>{
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
          <Counts/>
        </>
    );
};

