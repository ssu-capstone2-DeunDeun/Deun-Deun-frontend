import { combineReducers } from '../../node_modules/redux/';
import currentUser from './currentUser';
import loading from './loading';
import registerUserInfo, { registerUserSaga } from './registerUserInfo';

import { all } from 'redux-saga/effects';
import initHashtags, { initHashtagsSaga } from './initHashtags';
import clubAddInfo from './clubAddInfo';

const rootReducer = combineReducers({
	currentUser,
	registerUserInfo,
	loading,
	initHashtags,
	clubAddInfo
});

export function* rootSaga() {
	yield all([initHashtagsSaga(), registerUserSaga()]);
}
export default rootReducer;
