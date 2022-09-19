import React, {useEffect, useState} from 'react';

import './Users.css';
import {userService} from "../../services";
import {User} from "../User/User";

const Users = ({setUserId}) => {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data})=> {
            setUsers(data);
        })

    }, []);

    return (
        <div className={'usersContainer'}>
            {users.map(user => <User key={user.id} user={user} setUserId={setUserId}/>)}
        </div>
    );
};

export {Users};