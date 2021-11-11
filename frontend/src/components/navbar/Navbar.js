import React from 'react';

function Navbar(props) {

    return (
        <header>
            {props.users.map(user => <div>{user.username}</div>)}
        </header>
    )
}

export default Navbar