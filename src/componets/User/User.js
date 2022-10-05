import React from 'react';

import css from './User.module.css';

const User = ({user}) => {
    return (
        <div className={css.userContainer}>
            <div>{user.name}</div>
        </div>
    );
};

export {User};