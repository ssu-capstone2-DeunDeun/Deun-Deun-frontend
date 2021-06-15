import { createRequestActionType } from 'lib/createRequestActionTypes';
import createRequestSaga from 'lib/createRequestSaga';
import { createAction, handleActions } from 'redux-actions';
import * as postAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';

const [GET_POST_LIKE, GET_POST_LIKE_SUCCESS, GET_POST_LIKE_FAILURE] = createRequestActionType('likePost/GET_POST_LIKE');
const [GET_POST, GET_POST_SUCCESS, GET_POST_FAILURE] = createRequestActionType('likePost/GET_POST');

const [ON_LIKE_POST, ON_LIKE_POST_SUCCESS, ON_LIKE_POST_FAILURE] = createRequestActionType('likePost/ON_LIKE_POST');
const INPUT_COMMENT = 'likePost/INPUT_COMMENT';

export const getPostLike = createAction(GET_POST_LIKE);
export const getPost = createAction(GET_POST);
export const onLikePost = createAction(ON_LIKE_POST);
export const inputComment = createAction(INPUT_COMMENT);

const getPostLikeSaga = createRequestSaga(GET_POST_LIKE, postAPI.getPostLike);
const getPostSaga = createRequestSaga(GET_POST, postAPI.getPost);
const onLikePostSaga = createRequestSaga(ON_LIKE_POST, postAPI.likePost);

export function* likePostSaga() {
	yield takeLatest(GET_POST_LIKE, getPostLikeSaga);
	yield takeLatest(GET_POST, getPostSaga);
	yield takeLatest(ON_LIKE_POST, onLikePostSaga);
}

const initialState = {
	getPostLike: null,
	getPostLikeError: null,
	getPost: null,
	getPostError: null,
	likePost: null,
	likePostError: null,
	commentValue: null
};

const likePost = handleActions(
	{
		[GET_POST_LIKE_SUCCESS]: (state, { payload: getPostLike }) => ({
			...state,
			getPostLike
		}),
		[GET_POST_LIKE_FAILURE]: (state, { payload: getPostLikeError }) => ({
			...state,
			getPostLikeError
		}),
		[GET_POST_SUCCESS]: (state, { payload: getPost }) => ({
			...state,
			getPost
		}),
		[GET_POST_FAILURE]: (state, { payload: getPostError }) => ({
			...state,
			getPostError
		}),
		[ON_LIKE_POST_SUCCESS]: (state, { payload: likePost }) => ({
			...state,
			likePost
		}),
		[ON_LIKE_POST_FAILURE]: (state, { payload: likePostError }) => ({
			...state,
			likePostError
		}),
		[INPUT_COMMENT]: (state, { payload: { value, type } }) => ({
			...state,
			[type]: value
		})
	},
	initialState
);

export default likePost;
