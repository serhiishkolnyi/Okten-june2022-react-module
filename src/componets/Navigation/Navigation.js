import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Navigation.module.css';

const Navigation = () => {
    return (

        <div className={css.navigationContainer}>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/posts'}>Posts </NavLink>
            <NavLink to={'/comments'}>Comments</NavLink>
        </div>

    );
};

export {Navigation};