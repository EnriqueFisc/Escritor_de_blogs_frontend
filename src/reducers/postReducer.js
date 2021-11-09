import { types } from "../types/types";


const initialState = {
    posts: [],
    activePost: null,
}

export const postReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.postGetPost:
            return {
                ...state,
                posts: action.payload.map( arr => arr ),
            };
        case types.postSetActive:
            return {
                ...state,
                activePost: { ...action.payload },
            };
        case types.postSave:
            return {
                ...state,
                posts: [
                    action.payload,
                    ...state.posts
                ],
            };
        case types.postUpdate:
            return {
                ...state,
                posts: state.posts.map( post => ( post.id === action.payload.id ) ? action.payload : post ),
            };
        case types.postDelete:
            return {
                ...state,
                posts: state.posts.filter( post => post.id !== action.payload ),
                activePost: null,
            };
        case types.postLogoutCleanPosts:
            return {
                posts: [],
                activePost: null,
            };
    
        default:
            return state;
    }
}