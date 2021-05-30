import { createRequestActionType } from "lib/createRequestActionTypes";
import createRequestSaga from "lib/createRequestSaga";
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import { createAction, handleActions } from "redux-actions";

const [GET_USER_INFO, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAILURE] = createRequestActionType('currentUserInfo/GET_USER_INFO');
const INITIAL_USER_INFO = 'currentUserInfo/INITIAL_USER_INFO';

export const initialUserInfo = createAction(INITIAL_USER_INFO);
export const getUserInfo = createAction(GET_USER_INFO);

const isGetUserInfo = createRequestSaga(GET_USER_INFO, authAPI.getUserInfo);
export function* getUserInfoSaga() {
    yield takeLatest(GET_USER_INFO, isGetUserInfo);
}



const initialState = {
    userInfo: null,
    userInfoError: null,
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
        [INITIAL_USER_INFO]: (state, { payload: type }) => ({
            ...state,
            [type]: null,
        })
    },
    initialState
);

export default currentUserInfo;