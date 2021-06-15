import { createRequestActionType } from "lib/createRequestActionTypes";
import createRequestSaga from "lib/createRequestSaga";
import { createAction, handleAction, handleActions } from "redux-actions";
import { takeLatest } from 'redux-saga/effects';
import * as applyAPI from '../lib/api/apply';

const [GET_MEMBER_INFO, GET_MEMBER_INFO_SUCCESS, GET_MEMBER_INFO_FAILURE] = createRequestActionType("memberMangeInfo/GET_MEMBER_INFO");

export const getMemberInfo = createAction(GET_MEMBER_INFO);

const isgetMemberInfoSaga = createRequestSaga(GET_MEMBER_INFO, applyAPI.getParticipates);



export function* memberManageSaga() {
    yield takeLatest(GET_MEMBER_INFO, isgetMemberInfoSaga);
}

const initialState = {
    getMemberInfo: null,
    getMemberInfoError: null,
}


const memberManageInfo = handleActions(
    {
        [GET_MEMBER_INFO_SUCCESS]: (state, { payload: getMemberInfo }) => ({
            ...state,
            getMemberInfo,
        }),
        [GET_MEMBER_INFO_FAILURE]: (state, { payload: getMemberInfoError }) => ({
            ...state,
            getMemberInfoError,
        }),
    }
    , initialState
)


export default memberManageInfo;