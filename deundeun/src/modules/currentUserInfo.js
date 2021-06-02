import { createRequestActionType } from "lib/createRequestActionTypes";
import createRequestSaga from "lib/createRequestSaga";
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import { createAction, handleActions } from "redux-actions";
import produce from 'immer';

const [GET_USER_INFO, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAILURE] = createRequestActionType('currentUserInfo/GET_USER_INFO');
const [GET_CLUB_INFO, GET_CLUB_INFO_SUCCESS, GET_CLUB_INFO_FAILURE] = createRequestActionType('currentUserInfo/GET_CLUB_INFO');
const INITIAL_USER_INFO = 'currentUserInfo/INITIAL_USER_INFO';
const [UPDATE_NICKNAME, UPDATE_NICKNAME_SUCCESS, UPDATE_NICKNAME_FAILURE] = createRequestActionType('registerUserInfo/UPDATE_NICKNAME')
const CHANGE_NICKNAME_FIELD = 'currentUserInfo/CHANGE_NICKNAME_FIELD';


export const updateNickname = createAction(UPDATE_NICKNAME);
export const initialUserInfo = createAction(INITIAL_USER_INFO);
export const getUserInfo = createAction(GET_USER_INFO);
export const changeNicknameField = createAction(CHANGE_NICKNAME_FIELD);
export const getClubInfo = createAction(GET_CLUB_INFO);


const isUpdateNickname = createRequestSaga(UPDATE_NICKNAME, authAPI.updateNickname);
const isGetUserInfo = createRequestSaga(GET_USER_INFO, authAPI.getUserInfo);
const isGetClubInfo = createRequestSaga(GET_CLUB_INFO, authAPI.getClubs);

export function* getUserInfoSaga() {
    yield takeLatest(GET_USER_INFO, isGetUserInfo);
    yield takeLatest(GET_CLUB_INFO, isGetClubInfo);
    yield takeLatest(UPDATE_NICKNAME, isUpdateNickname);
}

const initialState = {
    userInfo: null,
    userInfoError: null,
    modifyNickname: null,
    modifyNicknameError: null,
    modifyNicknameSuccess: null,
    clubInfo: null,
    clubInfoError: null,

};

const currentUserInfo = handleActions(
    {
        [GET_USER_INFO_SUCCESS]: (state, { payload: userInfo }) => ({
            ...state,
            userInfo,
            userInfoError: null,
        }),
        [GET_USER_INFO_FAILURE]: (state, { payload: userInfoError }) => ({
            ...state,
            userInfoError,
        }),
        [GET_CLUB_INFO_SUCCESS]: (state, { payload: clubInfo }) => ({
            ...state,
            clubInfo,
            clubInfoError: null,
        }),
        [GET_CLUB_INFO_FAILURE]: (state, { payload: clubInfoError }) => ({
            ...state,
            clubInfoError,
        }),
        [INITIAL_USER_INFO]: (state, { payload: type }) => ({
            ...state,
            [type]: null,
        }),
        [UPDATE_NICKNAME_SUCCESS]: (state, { payload: modifyNickname }) => (
            produce(state, draft => {
                state["userInfo"]["nickname"] = modifyNickname;
                state["modifyNicknameSuccess"] = modifyNickname;
                state["modifyNicknameError"] = true;
            })
        ),
        [UPDATE_NICKNAME_FAILURE]: (state, { payload: modifyNicknameError }) => ({
            ...state,
            // modifyNicknameError,
            modifyNicknameError: false,
        }),
        [CHANGE_NICKNAME_FIELD]: (state, { payload: { type, value } }) => ({
            ...state,
            [type]: value,
        }),
    },
    initialState
);

export default currentUserInfo;