import { createRequestActionType } from "lib/createRequestActionTypes";
import createRequestSaga from "lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as postAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';



const CHANGE_FIELD = 'write/CHANGE_FIELD';
const INITIAL_FIELD = 'write/INITIAL_FIELD';
const [WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE] = createRequestActionType('write/WRITE_POST');



export const changeField = createAction(CHANGE_FIELD);
export const initialField = createAction(INITIAL_FIELD);
export const writePost = createAction(WRITE_POST);

const writePostSaga = createRequestSaga(WRITE_POST, postAPI.post);

export function* writeSaga() {
    yield takeLatest(WRITE_POST, writePostSaga);
}


const initialState = {
    title: "",
    content: "",
    thumbnailUrl: "",
    post: null,
    postError: null,
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
        })
    },
    initialState
);

export default write;