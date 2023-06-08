import React from 'react';

const JSX = () => {
    // return(
    //     <div>
    //         <h1>JSX</h1>
    //     </div>
    // )

    return React.createElement(
        'div', 
         {id: 'jsxid', className: 'jsxclass'},
         React.createElement('h1', null, 'JSX'))
}

export default JSX;