import React from 'react';

const NextLegs = (props) => {
    return(
        <div className="nextLegs" onClick={props.next}>
            <button>Next Legs ></button>
        </div>
    )
}

export default NextLegs;