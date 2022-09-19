import React from 'react';

import './User.css';

const User = ({user, setUserId}) => {
    return (
        <div className={'userContainer'}>
            <h3>{user.id} - {user.name}</h3>
            <button onClick={()=> setUserId(user.id)}>posts of users</button>
        </div>
    );
};

export {User};