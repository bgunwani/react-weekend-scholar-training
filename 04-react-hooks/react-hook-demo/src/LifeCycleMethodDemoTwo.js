import React, { Component } from "react";

export class LifeCycleMethodDemoTwo extends Component {

    constructor(props) {
        super(props);
        console.log('constructor Called.');
        this.state = { count: 0 }
        this.sum = this.sum.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    sum() {
        this.setState({ count: this.state.count + 1 })
    }

    decrease() {
        this.setState({ count: this.state.count - 1 })
    }

    componentWillMount() {
        console.log('componentWillMount Called. Count Value : ' + this.state.count)
    }

    componentDidMount() {
        console.log('componentDidMount Called.  Count Value : ' + this.state.count);
    }

    componentWillReceiveProps() {
        console.log("componentWillReceiveProps Called");
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate Called.");
        return false;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate Called. Count Value : ' + this.state.count);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate Called. Count Value : ' + this.state.count);
    }

    componentWillUnmount() {
        console.log('componentDidUpdate Called.');
    }


    render() {
        console.log('render Called');
        return (
            <>
                {/* <h2>Life Cycle Methods Demo</h2> */}
                {/* <button onClick={() => { }}>Sum</button> */}
                {/* <button onClick={this.sum.bind(this, "")}>Sum</button> */}
                <p>Count: {this.state.count}</p>
                <button onClick={this.sum}>Sum</button>
                <button onClick={this.decrease}>decrease</button>
            </>
        )
    }

}