import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const CHANGE_INPUT = 'applicationModifyInfo/CHANGE_INPUT';
const ADD_QUESTION = 'applicationModifyInfo/ADD_QUESTION';
const MODIFY_QUESTION_CONTENT = 'applicationModifyInfo/MODIFY_QUESTION_CONTENT';
const MODIFY_CHOICE_CONTENT = 'applicationModifyInfo/MODIFY_CHOICE_CONTENT';
const DELETE_QUESTION = 'applicationModifyInfo/DELETE_QUESTION';

export const changeInput = createAction(CHANGE_INPUT);
export const addQuestion = createAction(
	ADD_QUESTION,
	(id, multipleChoiceResponseDtos, questionContent, questionType) => ({
		id,
		multipleChoiceResponseDtos,
		questionContent,
		questionType
	})
);
export const modifyQuestionContent = createAction(MODIFY_QUESTION_CONTENT, (id, questionContent) => ({
	id,
	questionContent
}));
export const modifyChoiceContent = createAction(MODIFY_CHOICE_CONTENT, (id, choiceNumber, choiceContent) => ({
	id,
	choiceNumber,
	choiceContent
}));
export const deleteQuestion = createAction(DELETE_QUESTION, (id) => id);

const initialState = Map({
	applyFormId: 0,
	recruitQuestionResponseDtos: List([
		Map({
			multipleChoiceResponseDtos: List([
				Map({
					choiceContent: '',
					choiceNumber: 0
				})
			]),
			questionContent: '',
			questionNumber: 0,
			questionType: ''
		})
	]),
	title: '',
	modifyApplication: null,
	modifyApplicationError: null
});

const applicationModifyInfo = handleActions(
	{
		[CHANGE_INPUT]: (state, { payload: { type, value } }) => ({
			...state,
			[type]: value
		}),
		[ADD_QUESTION]: (state, action) => {
			const newList = state.recruitQuestionResponseDtos.push(
				Map({
					multipleChoiceResponseDtos: action.payload.multipleChoiceResponseDtos,
					questionContent: action.payload.questionContent,
					questionNumber: action.payload.questionNumber,
					questionType: action.payload.questionType
				})
			);
			state.recruitQuestionResponseDtos = newList;
			return state;
		},
		[MODIFY_QUESTION_CONTENT]: (state, action) => {
			const oldQuestionList = state.recruitQuestionResponseDtos;
			const index = oldQuestionList.findIndex((item) => item.get('questionNumber') === Number(action.payload.id));
			const newQuestionList = oldQuestionList.update(index, (item) =>
				item.set('questionContent', action.payload.questionContent)
			);

			state.recruitQuestionResponseDtos = newQuestionList;
			return state;
		},
		[DELETE_QUESTION]: (state, action) => {
			const oldQuestionList = state.recruitQuestionResponseDtos;
			const index = oldQuestionList.findIndex((item) => item.get('questionNumber') === Number(action.payload));
			const newQuestionList = oldQuestionList.delete(index);
			state.recruitQuestionResponseDtos = newQuestionList;
			return state;
		},
		[MODIFY_CHOICE_CONTENT]: (state, action) => {
			const questionList = state.recruitQuestionResponseDtos;
			const index = questionList.findIndex((item) => item.get('questionNumber') === Number(action.payload.id));
			const choiceIndex = state.recruitQuestionResponseDtos
				.get(index)
				.get('multipleChoiceRequestDtos')
				.findIndex((item) => item.get('choiceNumber') === action.payload.choiceNumber);
			console.log(choiceIndex);
			return state;
		}
	},
	initialState
);

export default applicationModifyInfo;
