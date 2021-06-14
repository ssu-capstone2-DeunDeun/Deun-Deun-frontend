import { createRequestActionType } from "lib/createRequestActionTypes";
import createRequestSaga from "lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as applyAPI from '../lib/api/apply';
import { takeLatest } from 'redux-saga/effects';

const [GET_APPLY_FORM, GET_APPLY_FORM_SUCCESS, GET_APPLY_FORM_FAILURE] = createRequestActionType("currentApplyForm/GET_APPLY_FORM")

export const getApplyForm = createAction(GET_APPLY_FORM);

const isGetApplyFormSaga = createRequestSaga(GET_APPLY_FORM, applyAPI.getApplyForms);

export function* currentApplySaga() {
    yield takeLatest(GET_APPLY_FORM, isGetApplyFormSaga);
}

const initialState = {
    getApplyForm: null,
    getApllyFormError: null,
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
    },
    initialState
);

export default currentApplyForm;
