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

    shouldComponentUpdate() {
      console.log('LifecycleA shouldComponentUpdate')
      return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('LifecycleA getSnapShotVeforeUpdate')
      return null
    }

    componentDidUpdate() {
      console.log('LifeCycleA componentDidUpdate')
    }

    changeState = () => {
      this.setState({
        name: 'Mukesh'
      })
    }
    
  render() {
    console.log('LifecycleA render')
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change State</button>
      <MountingLifecycleB />
      </div>
    )
  }
}

export default MountingLifecycleA
