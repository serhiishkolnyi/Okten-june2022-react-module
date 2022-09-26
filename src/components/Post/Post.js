import React, {useEffect, useState} from 'react';

import css from './Post.module.css';
import {useParams} from "react-router-dom";
import {postService} from "../../services";

const Post = () => {
    const {id} = useParams();
    const [post, setPost] = useState({})

    useEffect(() => {
        postService.postId(id).then(({data}) => setPost(data))
    }, [id])

    return (
        <div className={css.postContainer}>
            <div> userId: {post.userId}- id: {post.id}</div>
            <div> title: {post.title}</div>
            <div>body: {post.body}</div>
        </div>
    );
};

export {Post};