
import { useState } from "react";

/*
 * useState hook: 
    - allows us to track state in a function component.
    - generally, State refers to data store or properties that needs to be tracking at component or application level.
    - useState accepts an initial state and return two values:
        - The current state i.e. count
        - A function that updates the state i.e. setCount
 */

export function HookCounter() {

    const [count, setCount] = useState(5);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </>
    )

}