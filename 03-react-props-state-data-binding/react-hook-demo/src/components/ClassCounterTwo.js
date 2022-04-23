import React, { Component } from "react";

export class ClassCounterTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }
    increment = () => {
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.setState(prevState => {
            return {
                count: prevState.count + 5
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Class Counter</h2>
                <button type="button" onClick={this.increment}>Count {this.state.count}</button>
            </div>
        )
    }
}