import React from 'react';

import './App.css';
import {Launches, Users} from "./components";

const App = () => {
    return (
        <div>
            <Users/>
            <hr/>
            <Launches/>
        </div>
    );
};

export default App;