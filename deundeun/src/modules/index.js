import { combineReducers } from '../../node_modules/redux/';
import currentUserInfo, { getUserInfoSaga } from './currentUserInfo';
import loading from './loading';
import registerUserInfo, { registerUserSaga } from './registerUserInfo';
import { all } from 'redux-saga/effects';
import initHashtags, { initHashtagsSaga } from './initHashtags';
<<<<<<< HEAD
import clubAddInfo from './clubAddInfo';
import initHomePage, { initHomePageSaga } from './initHomePage';
=======
import clubAddInfo, { clubAddSaga } from './clubAddInfo';
>>>>>>> 4b32078f6abc7d964cb371561b986c920c184467

const rootReducer = combineReducers({
	currentUserInfo,
	registerUserInfo,
	loading,
	initHashtags,
	clubAddInfo,
	initHomePage,
});

export function* rootSaga() {
<<<<<<< HEAD
	yield all
		([initHashtagsSaga(),
		registerUserSaga(),
		getUserInfoSaga(),
		initHomePageSaga(),
		]);
=======
	yield all([initHashtagsSaga(), registerUserSaga(), getUserInfoSaga(), clubAddSaga()]);
>>>>>>> 4b32078f6abc7d964cb371561b986c920c184467
}

export default rootReducer;
