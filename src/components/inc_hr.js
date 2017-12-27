import React from 'react'

const IncHour = (props) => {
    const term = 100;
    return (
        <div>
            <button className="btn btn-outline-primary" onClick={() => {
                props.termtoinc(term)
            }} type='button'> &gt;&gt;
            </button>
        </div>
    );
};
export default IncHour;