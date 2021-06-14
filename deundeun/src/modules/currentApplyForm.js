import { createRequestActionType } from "lib/createRequestActionTypes";
import createRequestSaga from "lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as applyAPI from '../lib/api/apply';
import * as authAPI from '../lib/api/auth';
import { takeLatest } from 'redux-saga/effects';

const [GET_APPLY_FORM, GET_APPLY_FORM_SUCCESS, GET_APPLY_FORM_FAILURE] = createRequestActionType("currentApplyForm/GET_APPLY_FORM")
const [GET_RECRUITS, GET_RECRUITS_SUCCESS, GET_RECRUITS_FAILURE] = createRequestActionType('currentApplyFrom/GET_RECRUITS');
const [GET_CLUBS, GET_CLUBS_SUCCESS, GET_CLUBS_FAILURE] = createRequestActionType('currentApplyForm/GET_CLUBS');
export const getApplyForm = createAction(GET_APPLY_FORM);
export const getRecruits = createAction(GET_RECRUITS);
export const getClubs = createAction(GET_CLUBS);

const isGetClubsSaga = createRequestSaga(GET_CLUBS, authAPI.getClubs)
const isGetApplyFormSaga = createRequestSaga(GET_APPLY_FORM, applyAPI.getApplyForms);
const isGetRecruitsSaga = createRequestSaga(GET_RECRUITS, applyAPI.getRecruits);

export function* currentApplySaga() {
    yield takeLatest(GET_APPLY_FORM, isGetApplyFormSaga);
    yield takeLatest(GET_RECRUITS, isGetRecruitsSaga);
    yield takeLatest(GET_CLUBS, isGetClubsSaga);
}

const initialState = {
    getApplyForm: null,
    getApllyFormError: null,
    getRecruits: null,
    getRecruitsError: null,
    getClubs: null,
    getClubsError: null,
};

const currentApplyForm = handleActions(
    {
        [GET_APPLY_FORM_SUCCESS]: (state, { payload: getApplyForm }) => ({
            ...state,
            getApplyForm,
        }),
        [GET_APPLY_FORM_FAILURE]: (state, { payload: getApplyFormError }) => ({
            ...state,
            getApplyFormError,
        }),
        [GET_RECRUITS_SUCCESS]: (state, { payload: getRecruits }) => ({
            ...state,
            getRecruits,
        }),
        [GET_RECRUITS_FAILURE]: (state, { payload: getRecruitsError }) => ({
            ...state,
            getRecruitsError,
        }),
        [GET_CLUBS_SUCCESS]: (state, { payload: getClubs }) => ({
            ...state,
            getClubs,
        }),
        [GET_CLUBS_FAILURE]: (state, { payload: getClubsError }) => ({
            ...state,
            getClubsError,
        }),
    },
    initialState
);

export default currentApplyForm;
