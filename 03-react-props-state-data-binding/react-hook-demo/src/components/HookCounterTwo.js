
import { useState } from "react";

export function HookCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementByFive = () => {
        for (let index = 0; index < 5; index++) {
            // setCount(count + 1);
            setCount(prevCount => prevCount + 1);
        }
    }

    return (
        <>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={incrementByFive}>Increment By 5</button>
        </>
    )

}