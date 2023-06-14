import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounterHOC extends Component {
    
  render() {
    const { count, incrementCount } = this.props
    return (
      <div>
        <button onClick={incrementCount}>Click {count} Times</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounterHOC)
