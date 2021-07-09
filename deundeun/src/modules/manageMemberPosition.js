//해당 클럽의 모든 역할을 불러오는 것 -> getClubPositions 
//해당 클럽에 역할을 추가하는 것 ->addClubPosition
//해당 클럽에 역할을 삭제하는 것 -> deleteClubPositions 
//해당 클럽에 역할을 수정하는 것  ->updateClubPosition
//해당 클럽의 멤버의 역할을 삭제하는 것 ->deleteParticipateClubPositions
//해당 클럽의 멤버의 역할을 할당하는 것 ->assignParticipateClubPositions

import { createRequestActionType } from "lib/createRequestActionTypes";
import createRequestSaga from "lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import { takeLatest } from 'redux-saga/effects';
import * as position from '../lib/api/position';


const [GET_CLUB_POSITIONS, GET_CLUB_POSITIONS_SUCCESS, GET_CLUB_POSITIONS_FAILURE] = createRequestActionType('manageMemberPosition/GET_CLUB_POSITIONS');
const [ADD_CLUB_POSITION, ADD_CLUB_POSITION_SUCCESS, ADD_CLUB_POSITION_FAILURE] = createRequestActionType('manageMemberPosition/ADD_CLUB_POSITION');
const [DELETE_CLUB_POSITION, DELETE_CLUB_POSITION_SUCCESS, DELETE_CLUB_POSITION_FAILURE] = createRequestActionType('manageMemberPosition/DELETE_CLUB_POSITION');
const [UPDATE_CLUB_POSITION, UPDATE_CLUB_POSITION_SUCCESS, UPDATE_CLUB_POSITION_FAILURE] = createRequestActionType('manageMemberPosition/UPDATE_CLUB_POSITION');

// const [DELETE_PARTICIPATE_POSITIONS, DELETE_PARTICIPATE_POSITIONS_SUCCESS, DELETE_PARTICIPATE_POSITIONS_FAILURE] = createRequestActionType('manageMemberPosition/DELETE_PARTICIPATE_POSITIONS');
const [ASSIGN_PARTICIPATE_POSITIONS, ASSIGN_PARTICIPATE_POSITIONS_SUCCESS, ASSIGN_PARTICIPATE_POSITIONS_FAILURE] = createRequestActionType('manageMemberPosition/ASSIGN_PARTICIPATE_POSITIONS')


export const getClubPositions = createAction(GET_CLUB_POSITIONS);
export const addClubPosition = createAction(ADD_CLUB_POSITION);
export const deleteClubPosition = createAction(DELETE_CLUB_POSITION);
export const updateClubPosition = createAction(UPDATE_CLUB_POSITION);



const isGetClubPositions = createRequestSaga(GET_CLUB_POSITIONS, position.getClubPositions);
const isAddClubPosition = createRequestSaga(ADD_CLUB_POSITION, position.addClubPosition);
const isDeleteClubPosition = createRequestSaga(DELETE_CLUB_POSITION, position.deleteClubPosition);
const isUpdateClubPosition = createRequestSaga(UPDATE_CLUB_POSITION, position.updateClubPosition);



export function* manageMemberPositionSaga() {
    yield takeLatest(GET_CLUB_POSITIONS, isGetClubPositions);
    yield takeLatest(ADD_CLUB_POSITION, isAddClubPosition);
    yield takeLatest(UPDATE_CLUB_POSITION, isDeleteClubPosition);
    yield takeLatest(DELETE_CLUB_POSITION, isUpdateClubPosition);
}

const initialState = {
    clubPositions: null,
    clubPositionsError: null,
    addPositionValue: null,
}

const manageMemberPosition = handleActions(
    {
        [GET_CLUB_POSITIONS_SUCCESS]: (state, { payload: clubPositions }) => ({
            ...state,
            clubPositions,
        }),
        [GET_CLUB_POSITIONS_FAILURE]: (state, { payload: clubPositionsError }) => ({
            ...state,
            clubPositionsError,
        }),

    },
    initialState
);

export default manageMemberPosition;