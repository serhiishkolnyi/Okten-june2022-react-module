import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {commentService} from "../../services";
import {types} from "../../store/types";
import {Comment} from "../../componets";
import css from './CommentsPage.module.css';

const CommentsPage = () => {

    const comments = useSelector(state => state.commentReducer.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        commentService.getAll().then(({data}) => dispatch({type: types.LOAD_COMMENTS, payload: data}));

    }, []);

    return (
        <div className={css.commentsContainer}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentsPage};