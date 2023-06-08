import React, { Component } from "react";

class State extends Component{

    constructor(){
        super()
        this.state = {
            message: "We are learning react"
        }
    }

    changeMessage() {
        this.setState({
            message: 'We are learning about State'
        })
    }
    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>See More</button>
            </div>
            
        )
    }
}

export default State;