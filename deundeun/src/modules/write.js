import { createRequestActionType } from "lib/createRequestActionTypes";
import createRequestSaga from "lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as postAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';



const CHANGE_FIELD = 'write/CHANGE_FIELD';
const INITIAL_FIELD = 'write/INITIAL_FIELD';
const [WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE] = createRequestActionType('write/WRITE_POST');
const [INIT_POST, INIT_POST_SUCCESS, INIT_POST_FAILURE] = createRequestActionType('write/INIT_POST');
const [UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE] = createRequestActionType('write/UPDATE_POST');
const [DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE] = "write/DELETE_POST";


export const changeField = createAction(CHANGE_FIELD);
export const initialField = createAction(INITIAL_FIELD);
export const writePost = createAction(WRITE_POST);
export const initPost = createAction(INIT_POST);
export const updatePost = createAction(UPDATE_POST);
export const deletePost = createAction(DELETE_POST);


const writePostSaga = createRequestSaga(WRITE_POST, postAPI.post);
const initPostSaga = createRequestSaga(INIT_POST, postAPI.getPost);
const updatePostSaga = createRequestSaga(UPDATE_POST, postAPI.updatePost);
const deletePostSaga = createRequestSaga(DELETE_POST, postAPI.deletePost);

export function* writeSaga() {
    yield takeLatest(WRITE_POST, writePostSaga);
    yield takeLatest(INIT_POST, initPostSaga);
    yield takeLatest(UPDATE_POST, updatePostSaga);
    yield takeLatest(DELETE_POST, deletePostSaga);
}


const initialState = {
    title: "",
    content: "",
    thumbnailUrl: "",
    post: null,
    postError: null,
    initpost: null,
    initpostError: null,
    deletepost: null,
    deletepostError: null,
}

const write = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value,
        }),
        [INITIAL_FIELD]: state => initialState,
        [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
            ...state,
            post,
        }),
        [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
            ...state,
            postError,
        }),
        [INIT_POST_SUCCESS]: (state, { payload: initpost }) => ({
            ...state,
            initpost,
        }),
        [INIT_POST_FAILURE]: (state, { payload: initpostError }) => ({
            ...state,
            initpostError,
        }),
        [DELETE_POST_SUCCESS]: (state, { payload: deletepost }) => ({
            ...state,
            deletepost,

        }),
        [DELETE_POST_FAILURE]: (state, { payload: deletepostError }) => ({
            ...state,
            deletepostError,
        }),

    },
    initialState
);

export default write;