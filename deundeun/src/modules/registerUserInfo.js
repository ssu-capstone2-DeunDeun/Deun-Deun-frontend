import createRequestSaga from "lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as authAPI from '../lib/api/auth';
import { takeLatest } from 'redux-saga/effects';
import { createRequestActionType } from "lib/createRequestActionTypes";

const CHANGE_FIELD = "registerUserInfo/CHANGE_FIELD"
const INITIAL_FIELD = "regsiterUserInfo/INITIAL_FIELD";
const [DUPLICATED, DUPLICATED_SUCCESS, DUPLICATED_FAILURE] = createRequestActionType('registerUserInfo/DUPLICATED');
const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] = createRequestActionType('registerUserInfo/SIGNUP')
const [HASHTAG_SUBMIT, HASHTAG_SUBMIT_SUCCESS, HASHTAG_SUBMIT_FAILURE] = createRequestActionType('registerUserInfo/HASHTAG_SUBMIT')

export const changeField = createAction(CHANGE_FIELD);
export const initialField = createAction(INITIAL_FIELD);
export const duplicated = createAction(DUPLICATED);
export const hashtagSubmit = createAction(HASHTAG_SUBMIT);
export const signup = createAction(SIGNUP);


const isSignup = createRequestSaga(SIGNUP, authAPI.signup);
const isDuplicated = createRequestSaga(DUPLICATED, authAPI.isDuplicatedNickname);
const isHashtag = createRequestSaga(HASHTAG_SUBMIT, authAPI.addHashtags);

export function* registerUserSaga() {
    yield takeLatest(SIGNUP, isSignup);
    yield takeLatest(DUPLICATED, isDuplicated);
    yield takeLatest(HASHTAG_SUBMIT, isHashtag);
}

const initialState = {
    nickname: "",
    hashtags: [],
    name: "",
    duplicate: null,
    signupCheck: null,
    signupCheckError: null,
    hashtagsCheck: null,
    hashtagsCheckError: null,
};

const registerUserInfo = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { type, value } }) => ({
            ...state,
            [type]: value,
        }),
        [INITIAL_FIELD]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form],
        }),
        [DUPLICATED_SUCCESS]: (state, { payload: duplicate }) => ({
            ...state,
            duplicate,
        }),
        [DUPLICATED_FAILURE]: (state, { payload: duplicate }) => ({
            ...state,
            duplicate,
        }),
        [SIGNUP_SUCCESS]: (state, { payload: signupCheck }) => ({
            ...state,
            signupCheck,
            signupCheckError: null,
        }),
        [SIGNUP_FAILURE]: (state, { payload: signupCheckError }) => ({
            ...state,
            signupCheckError,
        }),
        [HASHTAG_SUBMIT_SUCCESS]: (state, { payload: hashtagsCheck }) => ({
            ...state,
            hashtagsCheck,
            hashtagsCheckError: null,
        }),
        [HASHTAG_SUBMIT_FAILURE]: (state, { payload: hashtagsCheckError }) => ({
            ...state,
            hashtagsCheckError,
        }),

    },
    initialState,
);

export default registerUserInfo;

