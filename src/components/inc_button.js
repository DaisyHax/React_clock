import React, {Component} from 'react'

const IncButton = (props) => {
    const term = props.term + 1;
    return (
        <div>
            <button className="btn btn-outline-primary" onClick={() => {
                props.termtoinc(term)
            }} type='button'>
                +
            </button>
        </div>
    );
};
export default IncButton;