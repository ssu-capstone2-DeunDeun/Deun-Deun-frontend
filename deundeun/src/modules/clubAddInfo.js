import { handleActions, createAction } from 'redux-actions';
import * as authAPI from '../lib/api/auth';
import createRequestSaga from 'lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import { createRequestActionType } from 'lib/createRequestActionTypes';

const CHANGE_INPUT = 'clubAddInfo/CHANGE_INPUT';
const INITIALIZE_INFO = 'clubAddInfo/INITIALIZE_INFO';
const [DUPLICATED, DUPLICATED_SUCCESS, DUPLICATED_FAILURE] = createRequestActionType('clubAddInfo/DUPLICATED');
const [ADDCLUB, ADDCLUB_SUCCESS, ADDCLUB_FAILURE] = createRequestActionType('clubAddInfo/ADDCLUB');

export const initializeInfo = createAction(INITIALIZE_INFO);
export const changeInput = createAction(CHANGE_INPUT);
export const duplicated = createAction(DUPLICATED);
export const clubAdd = createAction(ADDCLUB);

const isAddClub = createRequestSaga(ADDCLUB, authAPI.addClub);
const isDuplicatedClubName = createRequestSaga(DUPLICATED, authAPI.isDuplicatedClubName);

export function* clubAddSaga() {
	yield takeLatest(DUPLICATED, isDuplicatedClubName);
	yield takeLatest(ADDCLUB, isAddClub);
}

const initialState = {
	generation: 1,
	categoryType: '',
	clubName: '',
	isDuplicate: null,
	introduction: '',
	hashtagInfoIds: [],
	backgroundImageUrl: '',
	representImageUrl: '',
	clubImages: [],
	addClub: null,
	addClubError: null
};

const clubAddInfo = handleActions(
	{
		[INITIALIZE_INFO]: () => {
			return initialState;
		},
		[CHANGE_INPUT]: (state, { payload: { type, value } }) => ({
			...state,
			[type]: value
		}),
		[DUPLICATED_SUCCESS]: (state, { payload: isDuplicate }) => ({
			...state,
			isDuplicate
		}),
		[DUPLICATED_FAILURE]: (state, { payload: isDuplicate }) => ({
			...state,
			isDuplicate
		}),
		[ADDCLUB_SUCCESS]: (state, { payload: addClub }) => ({
			...state,
			addClub
		}),
		[ADDCLUB_FAILURE]: (state, { payload: addClubError }) => ({
			...state,
			addClubError
		})
	},
	initialState
);

export default clubAddInfo;
