import { PostActionTypes } from './post.types'

export const setPosts = posts => ({
    type: PostActionTypes.SET_POSTS,
    payload: posts
})

export const addPosts = newPost => ({
    type: PostActionTypes.ADD_POST,
    payload: newPost
})