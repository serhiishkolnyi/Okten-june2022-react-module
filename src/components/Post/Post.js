import React from 'react';

import './Post.css';

const Post = ({post}) => {
    console.log(post)
    return (
        <div className={'postContainer'}>
            <div className={'postTitle'}>{post.userId} : {post.id} - {post.title}</div>
            <div>{post.body}</div>
        </div>
    );
};

export {Post};