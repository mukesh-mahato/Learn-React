import React, { Component } from 'react'

class ConditionalRendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {
    // Approach-1: if/else
    // if(this.state.isLoggedIn){
    //     return <div>You are LoggedIn</div>
    // }
    // else{
    //     return <div>Please LogIn</div>
    // }

    // Approach-2: Element variables
    // let message 
    // if(this.state.isLoggedIn){
    //     message = <div>You are LoggedIn</div>
    // }
    // else{
    //     message = <div>Please LogIn</div>
    // }
    // return <div>{message}</div>

    // Approach-3: Ternary conditional operator
    // return(
    //     this.state.isLoggedIn ?
    //     <div>You are LoggedIn</div> :
    //     <div>Please LogIn</div>
    // )

    // approach-4: Short circuit operator
    return this.state.isLoggedIn && <div>You are LoggedIn</div>
    // return (
    //   <div>
    //     <div>You are LoggedIn</div>
    //     <div>Please LogIn</div>
    //   </div>
    // )
  }
}

export default ConditionalRendering
