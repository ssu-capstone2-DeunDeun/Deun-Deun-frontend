import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
const CHANGE_INPUT = 'applicationAddInfo/CHANGE_INPUT';
const ADD_QUESTION = 'applicationAddInfo/ADD_QUESTION';
const ADD_CHOICE = 'applicationAddInfo/ADD_CHOICE';
const DELETE_QUESTION = 'applicationAddInfo/DELETE_QUESTION';
const INITIALIZE_QUESTION = 'applicationAddInfo/INITIALIZE_QUESTION';
const INITIALIZE_CHOICE = 'applicationAddInfo/INITIALIZE_CHOICE';
const MODIFY_QUESTION_TYPE = 'applicationAddInfo/MODIFY_QUESTION_TYPE';
const MODIFY_QUESTION_CONTENT = 'applicationAddInfo/MODIFY_QUESTION_CONTENT';
const MODIFY_CHOICE = 'applicationAddInfo/MODIFY_CHOICE';
const DELETE_CHOICE = 'applicationAddInfo/DELETE_CHOICE';

export const changeInput = createAction(CHANGE_INPUT, (text) => text);
export const initializeQuestion = createAction(INITIALIZE_QUESTION);
export const initializeChoice = createAction(INITIALIZE_CHOICE, (id) => id);
export const addQuestion = createAction(
	ADD_QUESTION,
	(id, multipleChoiceRequestDtos, questionContent, questionType) => ({
		id,
		multipleChoiceRequestDtos,
		questionContent,
		questionType
	})
);
export const modifyQuestionType = createAction(MODIFY_QUESTION_TYPE, (id, questionType) => ({ id, questionType }));
export const modifyQuestionContent = createAction(MODIFY_QUESTION_CONTENT, (id, questionContent) => ({
	id,
	questionContent
}));
export const deleteQuestion = createAction(DELETE_QUESTION, (id) => id);

export const addChoice = createAction(ADD_CHOICE, (id, choiceNumber) => ({ id, choiceNumber }));
export const modifyChoice = createAction(MODIFY_CHOICE, (id, choiceNumber, choiceContent) => ({
	id,
	choiceNumber,
	choiceContent
}));
export const deleteChoice = createAction(DELETE_CHOICE, (id, choiceNumber) => ({ id, choiceNumber }));

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
		[CHANGE_INPUT]: (state, action) => state.set('title', action.payload),
		[INITIALIZE_QUESTION]: (state) =>
			state.update('recruitQuestionRequestDtos', (list) =>
				list.set(
					0,
					Map({
						id: 1,
						multipleChoiceRequestDtos: List([]),
						questionContent: '',
						questionType: 'SUBJECTIVE'
					})
				)
			),
		[INITIALIZE_CHOICE]: (state, action) => {
			const index = state
				.get('recruitQuestionRequestDtos')
				.findIndex((item) => item.get('id') === Number(action.payload));
			return state.update('recruitQuestionRequestDtos', (list) =>
				list.update(index, (item) =>
					item.setIn(
						['multipleChoiceRequestDtos', 0],
						Map({
							choiceContent: '',
							choiceNumber: 1
						})
					)
				)
			);
		},
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

		[MODIFY_QUESTION_TYPE]: (state, action) => {
			const index = state
				.get('recruitQuestionRequestDtos')
				.findIndex((item) => item.get('id') === Number(action.payload.id));
			return state.update('recruitQuestionRequestDtos', (list) =>
				list.update(index, (item) => item.set('questionType', action.payload.questionType))
			);
		},

		[MODIFY_QUESTION_CONTENT]: (state, action) => {
			const index = state
				.get('recruitQuestionRequestDtos')
				.findIndex((item) => item.get('id') === Number(action.payload.id));
			return state.update('recruitQuestionRequestDtos', (list) =>
				list.update(index, (item) => item.set('questionContent', action.payload.questionContent))
			);
		},

		[DELETE_QUESTION]: (state, action) => {
			const index = state
				.get('recruitQuestionRequestDtos')
				.findIndex((item) => item.get('id') === Number(action.payload));
			return state.deleteIn(['recruitQuestionRequestDtos', index]);
		},

		[ADD_CHOICE]: (state, action) => {
			const index = state
				.get('recruitQuestionRequestDtos')
				.findIndex((item) => item.get('id') === Number(action.payload.id));
			return state.update('recruitQuestionRequestDtos', (list) =>
				list.update(index, (item) =>
					item.update('multipleChoiceRequestDtos', (list) =>
						list.push(
							Map({
								choiceContent: '',
								choiceNumber: action.payload.choiceNumber
							})
						)
					)
				)
			);
		},
		[MODIFY_CHOICE]: (state, action) => {
			const index = state
				.get('recruitQuestionRequestDtos')
				.findIndex((item) => item.get('id') === Number(action.payload.id));
			const choiceIndex = state
				.get('recruitQuestionRequestDtos')
				.get(index)
				.get('multipleChoiceRequestDtos')
				.findIndex((item) => item.get('choiceNumber') === action.payload.choiceNumber);
			return state.update('recruitQuestionRequestDtos', (list) =>
				list.update(index, (item) =>
					item.update('multipleChoiceRequestDtos', (list) =>
						list.update(choiceIndex, (item) => item.set('choiceContent', action.payload.choiceContent))
					)
				)
			);
		},
		[DELETE_CHOICE]: (state, action) => {
			const index = state
				.get('recruitQuestionRequestDtos')
				.findIndex((item) => item.get('id') === Number(action.payload.id));
			const choiceIndex = state
				.get('recruitQuestionRequestDtos')
				.get(index)
				.get('multipleChoiceRequestDtos')
				.findIndex((item) => item.get('choiceNumber') === action.payload.choiceNumber);
			return state.update('recruitQuestionRequestDtos', (list) =>
				list.update(index, (item) => item.update('multipleChoiceRequestDtos', (list) => list.delete(choiceIndex)))
			);
		}
	},
	initialState
);

export default applicationAddInfo;
