import React, { Component } from "react";
import { Employee } from "./Employee";

export class Employees extends Component {

    state = {
        title: "Employees List",
        employeeList: [
            { name: "Kartik Sharma", age: 20 },
            { name: "King Kochhar", age: 25 },
            { name: "Gautam Bhalla", age: 45 },
            { name: "Sarah Bowling", age: 34 }
        ]
    }

    doClickMe = () => {
        const newState = this.state.employeeList.map((emp) => {
            emp.age += 5;
            return emp;
        })
        this.setState({
            title: "Emps",
            employeeList: newState
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
                {/*<Employee name={this.state.employeeList[0].name} age={this.state.employeeList[0].age}></Employee>
                <Employee name={this.state.employeeList[1].name} age={this.state.employeeList[1].age}></Employee>
                <Employee name={this.state.employeeList[2].name} age={this.state.employeeList[2].age}></Employee>
                <Employee name={this.state.employeeList[3].name} age={this.state.employeeList[3].age}></Employee>*/}
                {
                    this.state.employeeList.map((emp, index) => {
                        return <Employee key={index} sno={index} name={emp.name} age={emp.age} />
                    })
                }
                <input type="button" value="Increase Employee Age by 5" onClick={this.doClickMe} />

            </div>
        )
    }
}