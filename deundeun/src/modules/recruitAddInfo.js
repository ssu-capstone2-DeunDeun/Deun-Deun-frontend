import { createRequestActionType } from 'lib/createRequestActionTypes';
import createRequestSaga from 'lib/createRequestSaga';
import { createAction, handleActions } from 'redux-actions';
import * as authAPI from '../lib/api/auth';
import { takeLatest } from 'redux-saga/effects';

const CHANGE_INPUT = 'recruitAddInfo/CHANGE_INPUT';
const INITIALIZE_STATE = 'recruitAddInfo/INITIALIZE_STATE';
const [ADD_RECRUIT, ADD_RECRUIT_SUCCESS, ADD_RECRUIT_FAILURE] = createRequestActionType('recruitAddInfo/ADD_RECRUIT');

export const changeInput = createAction(CHANGE_INPUT);
export const initializeState = createAction(INITIALIZE_STATE);
export const addRecruit = createAction(ADD_RECRUIT);

const isAddRecruit = createRequestSaga(ADD_RECRUIT, authAPI.addRecruit);

export function* recruitAddSaga() {
	yield takeLatest(ADD_RECRUIT, isAddRecruit);
}

const initialState = {
	clubApplyFormId: 0,
	clubApplyFormTitle: '',
	content: '',
	documentPassAnnounceDate: '',
	finalPassAnnounceDate: '',
	generation: 0,
	interviewEndDate: '',
	interviewStartDate: '',
	submitEndDate: '',
	submitStartDate: '',
	title: '',
	addRecruitSuccess: null,
	addRecruitError: null
};

const recruitAddInfo = handleActions(
	{
		[INITIALIZE_STATE]: () => {
			return initialState;
		},
		[CHANGE_INPUT]: (state, { payload: { type, value } }) => ({
			...state,
			[type]: value
		}),
		[ADD_RECRUIT_SUCCESS]: (state, { payload: addRecruitSuccess }) => ({
			...state,
			addRecruitSuccess
		}),
		[ADD_RECRUIT_FAILURE]: (state, { payload: addRecruitError }) => ({
			...state,
			addRecruitError
		})
	},
	initialState
);

export default recruitAddInfo;
