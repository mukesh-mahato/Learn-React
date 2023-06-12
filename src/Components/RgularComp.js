import React, { Component, PureComponent } from 'react'

class RgularComp extends PureComponent {
  render() {
    console.log('Regular Comp render')
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}

export default RgularComp
