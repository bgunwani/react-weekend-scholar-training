
/* Function Based Component */

import { ChangeName } from "./components/changeName";
import { Employees } from "./components/Employees";
// import User from "./components/User";
// import Users from "./components/Users";

function Main() {

    return (
        <div>
            { /* Rendering Class Component Here */}
            {/* <h3>Class Component Rendering Here</h3>
            <Users name="John Smith" age="23" />
            <Users name="King Kochhar"></Users>
            <hr /> */}
            { /* Rendering Function Component Here */}
            { /*<h3>Function Component Rendering Here</h3>
            <User name="John Smith" age="23" />
            <User name="King Kochhar" age="45">Delhi</User> */}

            { /* Demonstrating State Management Technique */}
            { /*<Employees /> */}

            { /* Demonstrating Data Binding */}
            <ChangeName />
        </div>
    );
}

export default Main;