import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RgularComp';

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'knoxartiste'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'knoxartiste'
            })
        }, 2000)
    }
    
  render() {
    console.log('Parent Component render')
    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name} />
        <PureComp name ={this.state.name} />

      </div>
    )
  }
}

export default ParentComp
