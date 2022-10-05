import React from 'react';

import css from './Comment.module.css';

const Comment = ({comment}) => {
    return (
        <div className={css.commentContainer}>
            <div>{comment.name}</div>
            <div>{comment.body}</div>

        </div>
    );
};

export {Comment};