import './languages.css'
import React from 'react';

function Language(props) {
    return (
        <React.Fragment>
            <button className="btn-lang">{props.value}</button>
        </React.Fragment>
    );
}

export default Language;
