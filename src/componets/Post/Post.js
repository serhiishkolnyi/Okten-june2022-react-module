import React from 'react';

import css from './Post.module.css';

const Post = ({post}) => {
    console.log(post)
    return (
        <div className={css.postContainer}>
            <div>{post.title}</div>
            <div>{post.body}</div>
        </div>
    );
};

export {Post};