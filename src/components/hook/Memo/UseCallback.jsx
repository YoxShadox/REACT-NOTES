import { memo, useCallback, useState } from "react";


const Button = memo(({ onClick, children }) => {
    console.log(`Rendring button: ${children}`);
    return <button onClick={onClick}>{children}</button>
});
export default function UseCallback() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        console.log("increment inside")
        setCount((prevCount) => prevCount + 1);
    }, []);


    const decrement = useCallback(() => {
        console.log("Decrement inside")
        setCount((prevCount) => prevCount - 1);
    }, []);

    return (
        <>
            <section>
                <h1>Counter App</h1>
                <h2>{count}</h2>
                <Button onClick={increment} disabled={count >= 100}>Increment</Button>
                <Button onClick={decrement} disabled={count <= 0}>Decrement</Button>
            </section>
        </>
    );
};