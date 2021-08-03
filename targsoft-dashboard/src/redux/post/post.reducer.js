import { PostActionTypes } from './post.types'

const INITIAL_STATE = {
    posts: null
}

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PostActionTypes.SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case PostActionTypes.ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        default:
            return state;

    }
}

export default postReducer;