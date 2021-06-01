import createRequestSaga from "lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as authAPI from '../lib/api/auth';
import { takeLatest } from 'redux-saga/effects';

const INIT_HASHTAGS_FORM = 'initHashtags/INIT_HASHTAGS';
const INIT_HASHTAGS_FORM_SUCCESS = 'initHashtags/INIT_HASHTAGS_SUCCESS';
const INIT_HASHTAGS_FORM_FAILURE = 'initHashtags/INIT_HASHTAGS_FAILURE';

export const initHashtagsForm = createAction(INIT_HASHTAGS_FORM);

const initialState = {
    inithashtags: null,
    error: null,
};

const initHashtagSaga = createRequestSaga(INIT_HASHTAGS_FORM, authAPI.getHashtags);

export function* initHashtagsSaga() {
    yield takeLatest(INIT_HASHTAGS_FORM, initHashtagSaga);
}

const initHashtags = handleActions(
    {
        [INIT_HASHTAGS_FORM_SUCCESS]: (state, { payload: inithashtags }) => ({
            ...state,
            inithashtags,
        }),
        [INIT_HASHTAGS_FORM_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        })
    },
    initialState,
);

export default initHashtags;