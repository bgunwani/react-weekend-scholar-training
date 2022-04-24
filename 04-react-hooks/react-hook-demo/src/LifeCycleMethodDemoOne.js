import React, { Component } from "react";

export class LifeCycleMethodDemoOne extends Component {

    constructor(props) {
        super(props);
        console.log('constructor Called.');
    }

    componentWillMount() {
        console.log('componentWillMount Called.')
    }

    componentDidMount() {
        console.log('componentDidMount Called.');
    }

    componentWillReceiveProps() {
        console.log("componentWillReceiveProps Called");
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate Called.");
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate Called.');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate Called.');
    }

    componentWillUnmount() {
        console.log('componentDidUpdate Called.');
    }


    render() {
        console.log('render Called');
        return (
            <>
                <h2>Life Cycle Methods Demo</h2>
            </>
        )
    }

}