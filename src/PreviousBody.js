import React from 'react';

const PreviousBody = (props) => {
    return(
        <div className='previousBody' onClick={props.previous}>
            <button> Previous Body </button>
        </div>
    )
}

export default PreviousBody;