import { createRequestActionType } from "lib/createRequestActionTypes";
import createRequestSaga from "lib/createRequestSaga";
import { createAction, handleAction, handleActions } from "redux-actions";
import { takeLatest, takeEvery } from 'redux-saga/effects';
import produce from "../../node_modules/immer";
import * as applyAPI from '../lib/api/apply';
import * as position from '../lib/api/position';

const [GET_MEMBER_INFO, GET_MEMBER_INFO_SUCCESS, GET_MEMBER_INFO_FAILURE] = createRequestActionType("memberMangeInfo/GET_MEMBER_INFO");
const [DELETE_PARTICIPATE_POSITIONS, DELETE_PARTICIPATE_POSITIONS_SUCCESS, DELETE_PARTICIPATE_POSITIONS_FAILURE] = createRequestActionType('memberMangeInfo/DELETE_PARTICIPATE_POSITIONS');
const [ASSIGN_PARTICIPATE_POSITIONS, ASSIGN_PARTICIPATE_POSITIONS_SUCCESS, ASSIGN_PARTICIPATE_POSITIONS_FAILURE] = createRequestActionType('memberMangeInfo/ASSIGN_PARTICIPATE_POSITIONS');

const [ASSIGN_ADMIN_ROLE, ASSIGN_ADMIN_ROLE_SUCCESS, ASSIGN_ADMIN_ROLE_FAILURE] = createRequestActionType('memberManageInfo/ASSIGN_ADMIN_ROLE');
const [QUIT_ADMIN_ROLE, QUIT_ADMIN_ROLE_SUCCESS, QUIT_ADMIN_ROLE_FAILURE] = createRequestActionType('memberManageInfo/QUIT_ADMIN_ROLE');


export const getMemberInfo = createAction(GET_MEMBER_INFO);
export const deleteParticipatePositions = createAction(DELETE_PARTICIPATE_POSITIONS);
export const assignParticipatePositions = createAction(ASSIGN_PARTICIPATE_POSITIONS);

export const assignAdminRole = createAction(ASSIGN_ADMIN_ROLE);
export const quitAdminRole = createAction(QUIT_ADMIN_ROLE);


const isgetMemberInfoSaga = createRequestSaga(GET_MEMBER_INFO, applyAPI.getParticipates);
const isDeleteParticipatePos = createRequestSaga(DELETE_PARTICIPATE_POSITIONS, position.deleteParticipateClubPositions);
const isAssignParticipatePos = createRequestSaga(ASSIGN_PARTICIPATE_POSITIONS, position.assignParticipateClubPositions);

const isAssignAdminRole = createRequestSaga(ASSIGN_ADMIN_ROLE, position.assignAdminRole);
const isQuitAdminRole = createRequestSaga(QUIT_ADMIN_ROLE, position.quitAdminRole);


export function* memberManageSaga() {
    yield takeLatest(GET_MEMBER_INFO, isgetMemberInfoSaga);
    yield takeEvery(DELETE_PARTICIPATE_POSITIONS, isDeleteParticipatePos);
    yield takeEvery(ASSIGN_PARTICIPATE_POSITIONS, isAssignParticipatePos);
    yield takeEvery(ASSIGN_ADMIN_ROLE, isAssignAdminRole);
    yield takeEvery(QUIT_ADMIN_ROLE, isQuitAdminRole);
}

const initialState = {
    getMemberInfo: null,
    getMemberInfoError: null,
    deleteUserPos: null,
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
        [DELETE_PARTICIPATE_POSITIONS_SUCCESS]: (state, { payload: deleteUserPos }) => ({
            ...state,
            deleteUserPos,
        }),
        [DELETE_PARTICIPATE_POSITIONS_FAILURE]: (state, { payload: getMemberInfoError }) => ({
            ...state,
            getMemberInfoError,
        }),
        [ASSIGN_PARTICIPATE_POSITIONS_SUCCESS]: (state, { payload: assignedInfo }) =>
            produce(state, draft => {
                let temp = draft.getMemberInfo.find(v => v.id === assignedInfo.participateResponseDtos[0].id);
                temp.positionName = assignedInfo.participateResponseDtos[0].positionName;
            }),
        [ASSIGN_PARTICIPATE_POSITIONS_FAILURE]: (state, { payload: getMemberInfoError }) => ({
            ...state,
            getMemberInfoError,
        }),
        [ASSIGN_ADMIN_ROLE_SUCCESS]: (state, { payload: assignAdmin }) =>
            produce(state, draft => {
                let temp = draft.getMemberInfo.find(v => v.id === assignAdmin.id);
                temp.admin = true;
            }),
        [ASSIGN_ADMIN_ROLE_FAILURE]: (state, { payload: getMemberInfoError }) => ({
            ...state,
            getMemberInfoError,
        }),
        [QUIT_ADMIN_ROLE_SUCCESS]: (state, { payload: quitAdmin }) =>
            produce(state, draft => {
                let temp = draft.getMemberInfo.find(v => v.id === quitAdmin.id);
                temp.admin = false;
            }),
        [QUIT_ADMIN_ROLE_FAILURE]: (state, { payload: getMemberInfoError }) => ({
            ...state,
            getMemberInfoError,
        }),
    }
    , initialState
)


export default memberManageInfo;