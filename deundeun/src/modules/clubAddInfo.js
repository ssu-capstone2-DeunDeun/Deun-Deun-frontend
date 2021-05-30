import { handleActions, createAction } from 'redux-actions';
import * as authAPI from '../lib/api/auth';
import createRequestSaga from 'lib/createRequestSaga';
const CHANGE_INPUT = 'clubAddInfo/CHANGE_INPUT';

export const changeInput = createAction(CHANGE_INPUT);

const initialState = {
	generation: 0,
	categoryType: '',
	name: '',
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
		})
	},
	initialState
);

export default clubAddInfo;
