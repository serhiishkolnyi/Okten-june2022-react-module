import React, {useEffect, useState} from 'react';

import './Users.css';
import {User} from "../User/User";


const Users = () => {

    let [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(value => setUsers(value) )
    },[]);

    let [userInfo, setUserInfo] = useState(null);

    return (
        <div className={'wrapper'}>
            <div>{users.map(user => <User key={user.id} user={user} setUserInfo={setUserInfo} />)}</div>
            {userInfo &&
                <div className={'info'}>
                    <h3>User details info</h3>
                    <div><span>name:</span> {userInfo.name}</div>
                    <div><span>username:</span> {userInfo.username}</div>
                    <div><span>email:</span> {userInfo.email}</div>
                    <div><span>phone:</span> {userInfo.phone}</div>
                    <div><span>website:</span> {userInfo.website}</div>
                </div>
            }
        </div>
    );
};

export {Users};