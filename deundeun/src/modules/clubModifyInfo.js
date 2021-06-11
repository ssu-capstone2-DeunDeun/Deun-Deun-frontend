import { createRequestActionType } from 'lib/createRequestActionTypes';
import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'clubModifyInfo/CHANGE_INPUT';
const [DUPLICATED, DUPLICATED_SUCCESS, DUPLICATED_FAILURE] = createRequestActionType('clubModifyInfo/DUPLICATED');

export const changeInput = createAction(CHANGE_INPUT);
export const duplicated = createAction(DUPLICATED);

const initialState = {
	generation: 1,
	categoryType: '',
	clubName: '',
	clubHashtags: [],
	introduction: '',
	backgroundImageUrl: '',
	representImageUrl: '',
	clubImageUrls: []
};
const clubModifyInfo = handleActions(
	{
		[CHANGE_INPUT]: (state, { payload: { type, value } }) => ({
			...state,
			[type]: value
		})
		// [MODIFYCLUB_SUCCESS]: (state, { payload: addClub }) => ({
		// 	...state,
		// 	addClub,
		// }),
		// [MODIFYCLUB_FAILURE]: (state, { payload: addClubError }) => ({
		// 	...state,
		// 	addClubError,
		// }),
	},
	initialState
);

export default clubModifyInfo;
