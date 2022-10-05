import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {postService} from "../../services";
import {types} from "../../store/types";
import {Post} from "../../componets";
import css from './PostsPage.module.css';


const PostsPage = () => {

    const posts = useSelector(state => state.postReducer.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        postService.getAll().then(({data}) => dispatch({type: types.LOAD_POSTS, payload: data}));

    }, []);

    return (
        <div className={css.postsContainer}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsPage};