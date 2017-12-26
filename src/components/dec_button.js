import React from 'react'

const DecButton = (props) => {
    // console.log("props:" + props.termtodec);
    const term = props.term - 1;
    return (
        <div>
            <button className="btn btn-outline-primary" onClick={() => {
                props.termtodec(term)
            }} type='button'>-
            </button>
        </div>
    );
};
export default DecButton;