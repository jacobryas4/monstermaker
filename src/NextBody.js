import React from 'react';

const NextBody = (props) => {
    return(
        <div className="nextBody" onClick={props.next}>
            <button>Next Body ></button>
        </div>
    )
}

export default NextBody;