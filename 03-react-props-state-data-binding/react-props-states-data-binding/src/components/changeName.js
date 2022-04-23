import React, { Component } from "react";

export class ChangeName extends Component {

    state = {
        name: 'King Kochhar'
    };

    changeName = (newName) => {
        this.setState({
            name: newName
        })
    }

    changeNameFromInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h4>Name: {this.state.name}</h4>
                {/*<input type="button" onClick={() => this.changeName("Bhawna Gunwani")} value="Click Me" />
        <input type="button" onClick={this.changeName.bind(this, "Bhawna Gunwani")} value="Click Me" />*/}

                <input type="text" value={this.state.name} onChange={this.changeNameFromInput} />
            </div>
        )
    }

}