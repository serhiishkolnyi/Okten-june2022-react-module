import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {AlbumsPage, CommentsPage, NotFoundPage, PostPage, TodosPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'todos'}/>}/>

                <Route path={'todos'} element={<TodosPage/>}/>
                <Route path={'albums '} element={<AlbumsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
                <Route path={'posts'}>
                    <Route path={':id'} element={<PostPage/>}/>
                </Route>

            </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
};

export default App;