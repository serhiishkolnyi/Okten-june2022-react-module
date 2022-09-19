import React from 'react';

import './User.css';

const User = ({user, setUserInfo}) => {
    return (
        <div className={'container'}>
            <div>{user.id} - {user.name}</div>
            <button onClick={ ()=> setUserInfo(user)} className={'btn'}>user info</button>
        </div>
    );
};

export {User};