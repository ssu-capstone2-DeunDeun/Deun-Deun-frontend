import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'clubAddInfo/CHANGE_INPUT';
export const changeInput = createAction(CHANGE_INPUT);

const initialState = {
	recruitQuestionRequestDtos: [
		{
			multipleChoiceRequestDtos: [
				{
					chocieContent: '',
					choiceNumber: 0
				}
			],
			questionContent: '',
			questionType: 'SINGLE'
		}
	],
	title: ''
};

const applicationAddInfo = handleActions({
	[CHANGE_INPUT]: (state, { payload: { type, value } }) => ({
		...state,
		[type]: value
	})
});
