import React from 'react';

function Header(props) {
    return (
        <React.Fragment>
            <h2>{props.title}</h2>
        </React.Fragment>
    );
}

export default Header;
