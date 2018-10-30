import React from 'react';

const PreviousLegs = (props) => {
    return(
        <div className='previousLegs' onClick={props.previous}>
            <button> Previous Legs </button>
        </div>
    )
}

export default PreviousLegs;