import React, { Component } from 'react'

class ClickCounterRP extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    countIncrement = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }
    
  render() {
    const { count } = this.state
    return (
      <button onClick={this.countIncrement}>Clicked {count} times</button>
    )
  }
}

export default ClickCounterRP
