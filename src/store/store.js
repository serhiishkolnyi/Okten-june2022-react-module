import {combineReducers, createStore} from "redux";

import {commentReducer, postReducer, userReducer} from "./reducers";

let reducer = combineReducers({
    userReducer,
    postReducer,
    commentReducer

})

const store = createStore(reducer);

export {store};