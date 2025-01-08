import { useMemo, useState } from "react";

export const UseMemo = () =>{
    const [count, setCount] = useState(0);
     const handleButtonClick = () => {
          setCount(()=> count +1);
     };
  
    return(
        <>
          <section>
            <ExpensiveComponent/>
          <button onClick={handleButtonClick}>Increment</button>
          <button></button>
          <p>parent re-render:{count}</p>
          </section>
       
        </>
    );
};

const ExpensiveComponent = () =>{
    const sum = () =>{
       console.log("Calculating sum...");
       let i=0;
       for(i=0; i<= 1000000000; i++){
        i = i +1;
       }
       return i;
    };

    // const total = sum();
     const total = useMemo = (()=> sum(),[])
    return <p> sum: {total}</p>
}