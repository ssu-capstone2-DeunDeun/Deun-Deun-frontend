import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
const CHANGE_INPUT = 'applicationAddInfo/CHANGE_INPUT';
const ADD_QUESTION = 'applicationAddInfo/ADD_QUESTION';
const DELETE_QUESTION = 'applicationAddInfo/DELETE_QUESTION';

export const changeInput = createAction(CHANGE_INPUT, (text) => text);
export const addQuestion = createAction(
	ADD_QUESTION,
	(id, multipleChoiceRequestDtos, questionContent, questionType) => ({
		id,
		multipleChoiceRequestDtos,
		questionContent,
		questionType
	})
);
export const deleteQuestion = createAction(DELETE_QUESTION, (id) => id);

const initialState = Map({
	recruitQuestionRequestDtos: List([
		Map({
			id: 0,
			multipleChoiceRequestDtos: List([
				Map({
					choiceContent: '',
					choiceNumber: 0
				})
			]),
			questionContent: '',
			questionType: ''
		})
	]),
	title: ''
});

const applicationAddInfo = handleActions(
	{
		// [CHANGE_INPUT]: (state, { payload: { type, value } }) => ({
		// 	...state,
		// 	[type]: value
		// }),
		[CHANGE_INPUT]: (state, action) => state.set('title', action.payload),
		// [MODIFY_QUESTION]:
		[ADD_QUESTION]: (state, action) =>
			state.update('recruitQuestionRequestDtos', (list) =>
				list.push(
					Map({
						id: action.payload.id,
						multipleChoiceRequestDtos: action.payload.multipleChoiceRequestDtos,
						questionContent: action.payload.questionContent,
						questionType: action.payload.questionType
					})
				)
			),
		// [MODIFY_QUESTION]: (state, action) =>
		// 		state.update('recruitQuestionRequestDtos', (list) =>
		// 		)
		[DELETE_QUESTION]: (state, action) => {
			const index = state
				.get('recruitQuestionRequestDtos')
				.findIndex((item) => item.get('id') === Number(action.payload));
			return state.deleteIn(['recruitQuestionRequestDtos', index]);
		}
	},
	initialState
);

export default applicationAddInfo;
