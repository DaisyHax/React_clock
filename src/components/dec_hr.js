import React from 'react'

const DecHour = (props) => {
    const term = 0;
    return (
        <div>
            <button className="btn btn-outline-primary" onClick={() => {
                props.termtodec(term)
            }} type='button'> &lt;&lt;  </button>
        </div>
    );
};
export default DecHour;