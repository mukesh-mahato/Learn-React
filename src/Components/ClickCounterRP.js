import React, { Component } from 'react'

class ClickCounterRP extends Component {
    
  render() {
    const { count, countIncrement } = this.props
    return (
      <button onClick={countIncrement}>Clicked {count} times</button>
    )
  }
}

export default ClickCounterRP
