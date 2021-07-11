import { createRequestActionType } from "lib/createRequestActionTypes";
import createRequestSaga from "lib/createRequestSaga";
import { createAction, handleAction, handleActions } from "redux-actions";
import { takeLatest, takeEvery } from 'redux-saga/effects';
import * as applyAPI from '../lib/api/apply';
import * as position from '../lib/api/position';

const [GET_MEMBER_INFO, GET_MEMBER_INFO_SUCCESS, GET_MEMBER_INFO_FAILURE] = createRequestActionType("memberMangeInfo/GET_MEMBER_INFO");
const [DELETE_PARTICIPATE_POSITIONS, DELETE_PARTICIPATE_POSITIONS_SUCCESS, DELETE_PARTICIPATE_POSITIONS_FAILURE] = createRequestActionType('memberMangeInfo/DELETE_PARTICIPATE_POSITIONS');
const [ASSIGN_PARTICIPATE_POSITIONS, ASSIGN_PARTICIPATE_POSITIONS_SUCCESS, ASSIGN_PARTICIPATE_POSITIONS_FAILURE] = createRequestActionType('memberMangeInfo/ASSIGN_PARTICIPATE_POSITIONS');


export const getMemberInfo = createAction(GET_MEMBER_INFO);
export const deleteParticipatePositions = createAction(DELETE_PARTICIPATE_POSITIONS);
export const assignParticipatePositions = createAction(ASSIGN_PARTICIPATE_POSITIONS);


const isgetMemberInfoSaga = createRequestSaga(GET_MEMBER_INFO, applyAPI.getParticipates);
const isDeleteParticipatePos = createRequestSaga(DELETE_PARTICIPATE_POSITIONS, position.deleteParticipateClubPositions);
const isAssignParticipatePos = createRequestSaga(ASSIGN_PARTICIPATE_POSITIONS, position.assignParticipateClubPositions);


export function* memberManageSaga() {
    yield takeLatest(GET_MEMBER_INFO, isgetMemberInfoSaga);
    yield takeLatest(DELETE_PARTICIPATE_POSITIONS, isDeleteParticipatePos);
    yield takeEvery(ASSIGN_PARTICIPATE_POSITIONS, isAssignParticipatePos);
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
        [DELETE_PARTICIPATE_POSITIONS_SUCCESS]: (state, { payload: getMemberInfo }) => ({
            ...state,
            getMemberInfo,
        }),
        [DELETE_PARTICIPATE_POSITIONS_FAILURE]: (state, { payload: getMemberInfoError }) => ({
            ...state,
            getMemberInfoError,
        }),
        // [ASSIGN_PARTICIPATE_POSITIONS_SUCCESS]: (state, { payload: getMemberInfo }) => ({
        //     ...state,
        //     getMemberInfo,
        // }),
        // [ASSIGN_PARTICIPATE_POSITIONS_FAILURE]: (state, { payload: getMemberInfoError }) => ({
        //     ...state,
        //     getMemberInfoError,
        // }),

    }
    , initialState
)


export default memberManageInfo;