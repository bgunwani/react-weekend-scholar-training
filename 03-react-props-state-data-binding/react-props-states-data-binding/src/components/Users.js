
/* Class Component */

import React, { Component } from "react";

class Users extends Component {
    render() {
        if (this.props.age) {
            return (
                <div>
                    <h5>{this.props.header}</h5>
                    <p>Name: {this.props.name},
                        Age: {this.props.age}</p>
                    <h5>{this.props.footer}</h5>
                </div>
            )
        } else {
            return (
                <div>
                    <p>Name: {this.props.name}</p>
                </div>
            )
        }
    }
}

Users.defaultProps = {
    header: "Header Here",
    footer: "Footer Here"
}

export default Users;