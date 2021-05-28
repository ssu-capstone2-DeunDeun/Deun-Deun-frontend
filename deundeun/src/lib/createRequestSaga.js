import emojiRegex from 'emoji-regex';
import { finishLoading, startLoading } from 'modules/loading';
import { call, put } from 'redux-saga/effects';

// 본 함수는 redux-saga를 이용한 비동기 처리 함수입니다. call -> await, put-> dispatch
export default function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return function* (action) {
        put(startLoading(type));
        try {
            const response = yield call(request, action.payload);
            yield put({
                type: SUCCESS,
                payload: response.data,
            })
        }
        catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true,
            })
        }
        put(finishLoading(type));
    }
} 
