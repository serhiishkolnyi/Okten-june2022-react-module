import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userService} from "../../services";
import {types} from "../../store/types";
import {User} from "../../componets";
import css from './UserPage.module.css';

const UsersPage = () => {

    const users = useSelector(state => state.userReducer.users);
    const dispatch = useDispatch();


    useEffect(() => {
        userService.getAll().then(({data}) => dispatch({type: types.LOAD_USERS, payload: data}));

    }, []);

    return (
        <div className={css.usersContainer}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {UsersPage};