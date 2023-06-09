import React, { Component } from 'react'

class EventBind extends Component {

    constructor() {
        super()

        this.state = {
            message: "We are learning React"
        }
        // Approach-3:
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: "We are learning EventBinding in React"
    //     })
    // }

    clickHandler = () => {
        this.setState({
            message: "We are learning EventBinding in React"
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Approach-1: binding using bind keyword */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* Approach-2: Arrow Function approach */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        {/* Approach-3: Binding in the class Constructor*/}
        {/* <button onClick={this.clickHandler}>Click</button> */}
        {/* Use an Arrow function as a class property */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind;
