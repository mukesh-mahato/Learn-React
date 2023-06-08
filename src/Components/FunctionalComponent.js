import React from "react";

// function FunctionalComponent() {
//     return <h1>Functional Component</h1>
// }

const FunctionalComponent = (props) => {
    return(
        <div>
            {/* <h1>Functional Component</h1> */}
            <h1>Hello {props.name}</h1>

        </div>
    )
}

export default FunctionalComponent;