import { useState } from "react";

export const Count= () =>{
    const [count, setCount] = useState(0);
     const handleIncrement = () => {
          setCount(()=> count + step);
     };
     const [step, setStep] = useState(0);
     const handleDecrement = () => {
        setCount(()=> count - step);

   };

   const handleReset = () => {
    setCount(()=> setCount(0));
};

    return(
        <>
          <section>
           <h1>Counter App</h1>
          <h2>{count}</h2>
          <div>
            <label htmlFor="
            ">
              Step:
               <input type="number" value={step} onChange={(e)=> setStep(Number(e.target.value))} />
            </label>
          </div>
          <button onClick={handleIncrement} disabled = {count >= 100}>Increment</button>
          <button onClick={handleDecrement} disabled={count <= 0}>Decrement</button>
          <button onClick={handleReset}>Reset</button>
          </section>
        </>
    );
};
