import React, {useEffect, useState} from 'react';

import './App.css';
import {Post, Users} from "./components";
import {postService} from "./services";

const App = () => {
    let [userId, setUserId] = useState(null);
    let [posts, setPosts] = useState([]);

    useEffect(()=> {
        postService.postId(userId).then(({data})=> {
            setPosts(data);
        })

    },[userId])
    return (
        <div>

            <Users setUserId={setUserId}/>
            {posts.map(post => <Post key={post.id} post={post}/>)}

        </div>
    );
};

export default App;