import React from 'react';

import css from './Todo.module.css';

const Todo = ({todo}) => {
    return (
        <div className={css.todoContainer}>
            <div>{todo.userId} - {todo.id}</div>
            <div>{todo.title} - {todo.completed.toString()}</div>

        </div>
    );
};

export {Todo};