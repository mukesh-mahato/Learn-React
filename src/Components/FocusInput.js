import React, { Component } from 'react'
import RefsClassInput from './RefsClassInput'

class FocusInput extends Component {
    constructor(props) {
      super(props)
      this.componentRef = React.createRef()
    }

    clickHandler() {
        this.inputRef.current.focusInput()
    }
    
  render() {
    return (
      <div>
        <RefsClassInput ref={this.componentRef} />
        <button onClick={this.clickHandler}> Focus Input</button>
      </div>
    )
  }
}

export default FocusInput
