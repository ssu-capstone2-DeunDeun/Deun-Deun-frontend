import { createRequestActionType } from "lib/createRequestActionTypes";
import createRequestSaga from "lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as postAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';

const [GET_ALL_CLUBS, GET_ALL_CLUBS_SUCCESS, GET_ALL_CLUBS_FAILURE] = createRequestActionType('initHomePage/GET_ALL_CLUBS');
const [GET_HOME, GET_HOME_SUCCESS, GET_HOME_FAILURE] = createRequestActionType('initHomePage/GET_HOME')
const [GET_ALL_POSTS, GET_ALL_POSTS_SUCCESS, GET_ALL_POSTS_FAILURE] = createRequestActionType('initHomePage/GET_ALL_POSTS')

export const getAllClubs = createAction(GET_ALL_CLUBS);
export const getHome = createAction(GET_HOME);
export const getAllPost = createAction(GET_ALL_POSTS);


const isGetAllClubs = createRequestSaga(GET_ALL_CLUBS, postAPI.getAllClubs);
const isGetHome = createRequestSaga(GET_HOME, postAPI.getHome);
const isGetAllPosts = createRequestSaga(GET_ALL_POSTS, postAPI.getPosts);


export function* initHomePageSaga() {
    yield takeLatest(GET_ALL_CLUBS, isGetAllClubs);
    yield takeLatest(GET_HOME, isGetHome);
    yield takeLatest(GET_ALL_POSTS, isGetAllPosts);
}

const initialState = {
    getAllClubs: null,
    getAllClubsError: null,
    getHome: null,
    getHomeError: null,
    getAllPosts: null,
    getAllPostsError: null,
}


const initHomePage = handleActions(
    {
        [GET_ALL_CLUBS_SUCCESS]: (state, { payload: getAllClubs }) => ({
            ...state,
            getAllClubs,
        }),
        [GET_ALL_CLUBS_FAILURE]: (state, { payload: getAllClubsError }) => ({
            ...state,
            getAllClubsError,
        }),
        [GET_HOME_SUCCESS]: (state, { payload: getHome }) => ({
            ...state,
            getHome,
        }),
        [GET_HOME_FAILURE]: (state, { payload: getHomeError }) => ({
            ...state,
            getHomeError,
        }),
        [GET_ALL_POSTS_SUCCESS]: (state, { payload: getAllPosts }) => ({
            ...state,
            getAllPosts
        }),
        [GET_ALL_POSTS_FAILURE]: (state, { payload: getAllPostsError }) => ({
            ...state,
            getAllPostsError,
        }),
    },
    initialState,
);

export default initHomePage;