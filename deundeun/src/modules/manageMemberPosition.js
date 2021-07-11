import { createRequestActionType } from "lib/createRequestActionTypes";
import createRequestSaga from "lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import { takeLatest } from 'redux-saga/effects';
import produce from "../../node_modules/immer";
import * as position from '../lib/api/position';


const [GET_CLUB_POSITIONS, GET_CLUB_POSITIONS_SUCCESS, GET_CLUB_POSITIONS_FAILURE] = createRequestActionType('manageMemberPosition/GET_CLUB_POSITIONS');
const [ADD_CLUB_POSITION, ADD_CLUB_POSITION_SUCCESS, ADD_CLUB_POSITION_FAILURE] = createRequestActionType('manageMemberPosition/ADD_CLUB_POSITION');
const [DELETE_CLUB_POSITION, DELETE_CLUB_POSITION_SUCCESS, DELETE_CLUB_POSITION_FAILURE] = createRequestActionType('manageMemberPosition/DELETE_CLUB_POSITION');
const [UPDATE_CLUB_POSITION, UPDATE_CLUB_POSITION_SUCCESS, UPDATE_CLUB_POSITION_FAILURE] = createRequestActionType('manageMemberPosition/UPDATE_CLUB_POSITION');

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
    yield takeLatest(DELETE_CLUB_POSITION, isDeleteClubPosition);
    yield takeLatest(UPDATE_CLUB_POSITION, isUpdateClubPosition);
}

const initialState = {
    clubPositions: null,
    clubPositionsError: null,
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
        [ADD_CLUB_POSITION_SUCCESS]: (state, { payload: addClubPosition }) =>
            produce(state, draft => {
                draft.clubPositions = draft.clubPositions.concat(addClubPosition);
            }),
        [ADD_CLUB_POSITION_FAILURE]: (state, { payload: clubPositionsError }) => ({
            ...state,
            clubPositionsError,
        }),
        [DELETE_CLUB_POSITION_SUCCESS]: (state, { payload: deleteClubPosition }) =>
            produce(state, draft => {
                draft.clubPositions = draft.clubPositions.filter(value => value.positionId !== deleteClubPosition.positionId);
            }),
        [DELETE_CLUB_POSITION_FAILURE]: (state, { payload: clubPositionsError }) => ({
            ...state,
            clubPositionsError,
        }),
        // [UPDATE_CLUB_POSITION_SUCCESS]: (state, { payload: clubPositions }) => ({
        //     ...state,
        //     clubPositions,
        // }),
        [UPDATE_CLUB_POSITION_SUCCESS]: (state, { payload: updateClubPosition }) =>
            produce(state, draft => {
                let value = draft.clubPositions.filter(v => v.positionId === updateClubPosition.positionId);
                value.positionName = updateClubPosition.positionName;
            }),
        [UPDATE_CLUB_POSITION_FAILURE]: (state, { payload: clubPositionsError }) => ({
            ...state,
            clubPositionsError,
        }),

    },
    initialState
);

export default manageMemberPosition;