import React, { Component } from 'react'

class HoverCounterRP extends Component {

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
      <h2 onMouseOver={this.countIncrement}>Hovered {count} times</h2>
    )
  }
}

export default HoverCounterRP
