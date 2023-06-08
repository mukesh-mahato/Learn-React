import React, {Component} from "react";

class ClassComponent extends Component{
    render(){
        // return <h1>Class Component</h1>
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
            </div>
        )
    }
}

export default ClassComponent;