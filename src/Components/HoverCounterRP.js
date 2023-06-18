import React, { Component } from 'react'

class HoverCounterRP extends Component {

   render() {
    const { count, countIncrement } = this.props
    return (
      <h2 onMouseOver={countIncrement}>Hovered {count} times</h2>
    )
  }
}

export default HoverCounterRP
