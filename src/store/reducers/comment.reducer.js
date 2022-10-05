import {types} from "../types";


const commentReducer = (state = {comments: []}, action) => {
    switch (action.type) {
        case types.LOAD_COMMENTS:
            return {
                ...state, comments: action.payload
            }
        default:
            return state;
    }
};

export {commentReducer};