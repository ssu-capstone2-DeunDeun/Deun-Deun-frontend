import { createRequestActionType } from "lib/createRequestActionTypes";
import { createAction, handleActions } from "redux-actions";
import * as authAPI from '../lib/api/auth';
import { takeLatest } from 'redux-saga/effects';


const [GET_CLUBS, GET_CLUBS_SUCCESS, GET_CLUB_FAILURE] = createRequestActionType('currentMemberForm/GET_CLUB');

export const getClubs = createAction(GET_CLUBS);


const isGetClubsSaga = createRequestActionType(GET_CLUBS, authAPI.getClubs);

export function* currentMemberSaga() {
    yield takeLatest(GET_CLUBS, isGetClubsSaga);
}


const initialState = {
    getClubs: null,
    getClubsError: null,

}

const currentMemberForm = handleActions(
    {
        [GET_CLUBS_SUCCESS]: (state, { payload: getClubs }) => ({
            ...state,
            getClubs,
        }),
        [GET_CLUB_FAILURE]: (state, { payload: getClubsError }) => ({
            ...state,
            getClubsError,
        }),
    },
    initialState
);

export default currentMemberForm;