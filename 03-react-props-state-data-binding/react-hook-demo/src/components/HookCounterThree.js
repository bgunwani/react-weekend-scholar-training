
import { useState } from "react";

export function HookCounterThree() {

    const [userName, setName] = useState({ firstName: 'King', lastName: 'Kochhar' });

    return (
        <>
            <form>
                <input type="text" value={userName.firstName}
                    onChange={e => setName({ ...userName, firstName: e.target.value })} />
                <input type="text" value={userName.lastName}
                    onChange={e => setName({ ...userName, lastName: e.target.value })} />
                <h4>First Name: {userName.firstName} </h4>
                <h4>Last Name: {userName.lastName} </h4>
            </form>
        </>
    )

}