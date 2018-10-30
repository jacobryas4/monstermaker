import React from 'react';

const NextHead = (props) => {
    return(
        <div className="nextHead" onClick={props.next}>
            <button>Next Head ></button>
        </div>
    )
}

export default NextHead;