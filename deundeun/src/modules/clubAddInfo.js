import { handleActions, createAction } from 'redux-actions';
import * as authAPI from '../lib/api/auth';
import createRequestSaga from 'lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import { createRequestActionType } from 'lib/createRequestActionTypes';

const CHANGE_INPUT = 'clubAddInfo/CHANGE_INPUT';
const [DUPLICATED, DUPLICATED_SUCCESS, DUPLICATED_FAILURE] = createRequestActionType('clubAddInfo/DUPLICATED');
const ADDCLUB = 'clubAddInfo/ADDCLUB';

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
	clubImages: []
};

const clubAddInfo = handleActions(
	{
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
		})
	},
	initialState
);

export default clubAddInfo;
