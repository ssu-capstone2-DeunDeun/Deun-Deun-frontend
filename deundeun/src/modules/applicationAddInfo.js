import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'clubAddInfo/CHANGE_INPUT';
const ADD_QUESTION = 'clubAddInfo/ADD_QUESTION';
const DELETE_QUESTION = 'clubAddInfo/DELETE_QUESTION';

export const changeInput = createAction(CHANGE_INPUT);
export const addQuestion = createAction(ADD_QUESTION);
export const deleteQuestion = createAction(DELETE_QUESTION);


const initialState = {
	recruitQuestionRequestDtos: [],
	title: '',
	questionContent: "",
	question: [],
};

const applicationAddInfo = handleActions(
	{
		[CHANGE_INPUT]: (state, { payload: { type, value } }) => ({
			...state,
			[type]: value
		}),
		[ADD_QUESTION]: (state, action) => ({


		}),
		[DELETE_QUESTION]: (state, { payload: index, type }) => ({
			...state,
			// [type]: [type].filter(type => )
		})
	},
	initialState
);


export default applicationAddInfo;