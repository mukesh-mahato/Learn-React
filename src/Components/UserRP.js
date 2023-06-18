import React, { Component } from 'react'

class UserRP extends Component {
  render() {
    return (
      <div>
        {this.props.render(true)}
      </div>
    )
  }
}

export default UserRP
