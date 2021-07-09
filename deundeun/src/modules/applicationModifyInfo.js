import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const CHANGE_INPUT = 'applicationModifyInfo/CHANGE_INPUT';
const MODIFY_QUESTION_CONTENT = 'applicationModifyInfo/MODIFY_QUESTION_CONTENT';

export const changeInput = createAction(CHANGE_INPUT);
export const modifyQuestionContent = createAction(MODIFY_QUESTION_CONTENT, (id, questionContent) => ({
	id,
	questionContent
}));

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
		// [MODIFY_QUESTION_CONTENT]: (state, action) => {
		// 	const index = state
		// 		.get('recruitQuestionResponseDtos')
		// 		.findIndex((item) => item.get('questionNumber') === Number(action.payload.id));
		// 	return state.update('recruitQuestionResponseDtos', (list) =>
		// 		list.update(index, (item) => item.set('questionContent', action.payload.questionContent))
		// 	);
		// }
		[MODIFY_QUESTION_CONTENT]: (state, action) => {
			// const index = state.recruitQuestionResponseDtos.findIndex(
			// 	(item) => item.get('questionNumber') === Number(action.payload.id)
			// );
			// const modifiedState = state.recruitQuestionResponseDtos.update(index, (item) =>
			// 	item.set('questionContent', action.payload.questionContent)
			// );
			// return modifiedState;
			return state;
		}
	},
	initialState
);

export default applicationModifyInfo;
