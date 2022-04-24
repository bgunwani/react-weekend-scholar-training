
import { useEffect, useState } from "react";

export function HookCounter() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');


    useEffect(() => {
        console.log('Update Document Title with useEffect');
        document.title = `Clicked ${count} times.`;
    }, [])  // To run useEffect Conditionally.

    return (
        <>
            <input type="text" value={name}
                onChange={event => setName(event.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click {count} times.</button>
        </>
    )
}