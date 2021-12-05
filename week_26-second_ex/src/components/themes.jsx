import React from 'react';

function Theme(props) {
    return (
        <React.Fragment>
            <a href="#card">{props.name}</a>
            <span> ({props.quantity})</span>
            <br />
        </React.Fragment>
    );
}

export default Theme;
