/* Class-Based Component */

import React, { Component } from "react";

class App extends Component {

    render() {
        var num1 = 1000, num2 = 2000;
        // Internal Style
        var myStyles = {
            fontSize: 20,
            color: 'navy',
            fontWeight: 'bold'
        }
        return (
            <>
                <h3>App Component</h3>
                <p>This is my app component.</p>
                <p>The sum of two numbers: {num1 + num2}</p>
                { /*Inline Style*/}
                <p style={myStyles}>I am applying styles here..</p>
                { /*Conditional Construct*/}
                <p>{num1 > num2 ? "Number One is greatest." : "Number Two is greatest."}</p>
                {/* This is 
                    a multi Line Comment.*/}
            </>
        );
    }
}

export default App;