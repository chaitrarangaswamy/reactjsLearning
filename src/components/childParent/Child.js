import React from 'react';

function Child (props){
    let child = 'gobalt'
       
    
    return (
        <div>
          <button onClick={() => props.parentHandler(child)}>click child</button>
        </div>
    )
}

export default Child