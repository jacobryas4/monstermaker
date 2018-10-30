import React from 'react';

const PreviousImage = (props) => {
    return(
        <div className='previousHead' onClick={props.previous}>
            <button> Previous Head </button>
        </div>
    )
}

export default PreviousImage;