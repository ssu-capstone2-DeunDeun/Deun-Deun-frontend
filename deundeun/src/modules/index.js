import { combineReducers } from '../../node_modules/redux/';
import currentUserInfo, { getUserInfoSaga } from './currentUserInfo';
import loading from './loading';
import registerUserInfo, { registerUserSaga } from './registerUserInfo';
import { all } from 'redux-saga/effects';
import initHashtags, { initHashtagsSaga } from './initHashtags';
import initHomePage, { initHomePageSaga } from './initHomePage';
import clubAddInfo, { clubAddSaga } from './clubAddInfo';
import clubModifyInfo from './clubModifyInfo';
import initCategory from './initCategory';
import recruitAddInfo, { recruitAddSaga } from './recruitAddInfo';

import applicationAddInfo, { applicationAddSaga } from './applicationAddInfo';
import write, { writeSaga } from './write';
import currentClubPostList, { currentClubPostListSaga } from './currentClubPostList';

const rootReducer = combineReducers({
	currentUserInfo,
	registerUserInfo,
	loading,
	initHashtags,
	clubAddInfo,
	initCategory,
	clubModifyInfo,
	applicationAddInfo,
	write,
	currentClubPostList,
	initHomePage,
	recruitAddInfo
});

export function* rootSaga() {
	yield all([
		initHashtagsSaga(),
		registerUserSaga(),
		getUserInfoSaga(),
		initHomePageSaga(),
		clubAddSaga(),
		writeSaga(),
		currentClubPostListSaga(),
		applicationAddSaga(),
		recruitAddSaga()
	]);
}

export default rootReducer;
