import React from 'react';

import css from './Comment.module.css';
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    const {id, postId, name, email, body} = comment;
    return (
        <div className={css.commentContainer}>
            <Link to={`/posts/${postId}`}>
                <div>
                    <div>{id} : {postId} --- {name}</div>
                    <div>email: {email}</div>
                    <div>body: {body}</div>
                </div>
            </Link>

        </div>
    );
};

export {Comment};