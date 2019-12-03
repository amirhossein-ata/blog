import { ActionTypes } from './actionTypes'

export function getAllPosts() {
    return {
        type: ActionTypes.GET_ALL_POSTS_REQUEST
    }
}