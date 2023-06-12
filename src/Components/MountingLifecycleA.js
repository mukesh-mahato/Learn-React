import React, { Component } from 'react'
import MountingLifecycleB from './MountingLifecycleB'

class MountingLifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Knoxartiste'
      }
      console.log('Lifecycle A Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null 
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
    
  render() {
    console.log('LifecycleA render')
    return (
      <div>
        <div>LifecycleA</div>
      <MountingLifecycleB />
      </div>
    )
  }
}

export default MountingLifecycleA
