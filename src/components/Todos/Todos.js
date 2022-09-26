import React, {useEffect, useState} from 'react';

import css from './Todos.module.css';
import {todosService} from "../../services";
import {Todo} from "../Todo/Todo";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(({data}) => setTodos(data));

    }, [])

    return (
        <div className={css.todosContainer}>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};