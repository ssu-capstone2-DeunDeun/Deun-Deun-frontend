import { createRequestActionType } from "lib/createRequestActionTypes";
import createRequestSaga from "lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as postAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';


const [GET_CLUBS_POSTS, GET_CLUBS_POSTS_SUCCESS, GET_CLUBS_POSTS_FAILURE] = createRequestActionType('currentClubPostList/GET_CLUBS_POSTS');

export const getClubsPosts = createAction(GET_CLUBS_POSTS);

const isgetClubsPosts = createRequestSaga(GET_CLUBS_POSTS, postAPI.getClubPosts)

export function* currentClubPostListSaga() {
    yield takeLatest(GET_CLUBS_POSTS, isgetClubsPosts);
}

const initialState = {
    getClubsPosts: null,
    getClubsPostsError: null,
}

const currentClubPostList = handleActions(
    {
        [GET_CLUBS_POSTS_SUCCESS]: (state, { payload: getClubsPosts }) => ({
            ...state,
            getClubsPosts,
        }),
        [GET_CLUBS_POSTS_FAILURE]: (state, { payload: getClubsPostsError }) => ({
            ...state,
            getClubsPostsError,
        })
    },
    initialState,
)


export default currentClubPostList;
