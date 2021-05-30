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
const [MODIFY_NICKNAME, MODIFY_NICKNAME_SUCCESS, MODIFY_NICKNAME_FAILURE] = createRequestActionType('registerUserInfo/MODIFY_NICKNAME')

export const changeField = createAction(CHANGE_FIELD);
export const initialField = createAction(INITIAL_FIELD);
export const duplicated = createAction(DUPLICATED);
export const hashtagSubmit = createAction(HASHTAG_SUBMIT);
export const signup = createAction(SIGNUP);
export const modifyNickname = createAction(MODIFY_NICKNAME);


const isSignup = createRequestSaga(SIGNUP, authAPI.signup);
const isDuplicated = createRequestSaga(DUPLICATED, authAPI.isDuplicatedNickname);
const isHashtag = createRequestSaga(HASHTAG_SUBMIT, authAPI.addHashtags);
const isModifyNickname = createRequestSaga(MODIFY_NICKNAME, authAPI.updateNickname);

export function* registerUserSaga() {
    yield takeLatest(SIGNUP, isSignup);
    yield takeLatest(DUPLICATED, isDuplicated);
    yield takeLatest(HASHTAG_SUBMIT, isHashtag);
    yield takeLatest(MODIFY_NICKNAME, isModifyNickname);
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
    modifyNickname: null,
    modifyNicknameError: null,
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
        [MODIFY_NICKNAME_SUCCESS]: (state, { payload: modifyNickname }) => ({
            ...state,
            modifyNickname,
        }),
        [MODIFY_NICKNAME_FAILURE]: (state, { payload: modifyNicknameError }) => ({
            ...state,
            modifyNicknameError,
        })
    },
    initialState,
);

export default registerUserInfo;

