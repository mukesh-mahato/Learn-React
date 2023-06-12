import React, { Component } from 'react'

class MountingLifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Knoxartiste'
      }
      console.log('Lifecycle B Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null 
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate() {
      console.log('LifecycleB shouldComponentUpdate')
      return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('LifecycleB getSnapShotVeforeUpdate')
      return null
    }

    componentDidUpdate() {
      console.log('LifeCycleB componentDidUpdate')
    }
    
  render() {
    console.log('LifecycleB render')
    return (
      <div>
        LifecycleB
      </div>
    )
  }
}

export default MountingLifecycleB
