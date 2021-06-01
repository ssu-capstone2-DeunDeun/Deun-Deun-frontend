import { combineReducers } from '../../node_modules/redux/';
import currentUserInfo, { getUserInfoSaga } from './currentUserInfo';
import loading from './loading';
import registerUserInfo, { registerUserSaga } from './registerUserInfo';
import { all } from 'redux-saga/effects';
import initHashtags, { initHashtagsSaga } from './initHashtags';
import initHomePage, { initHomePageSaga } from './initHomePage';
import clubAddInfo, { clubAddSaga } from './clubAddInfo';
import initCategory from './initCategory';
import clubAddRecruitInfo from './clubAddRecruitInfo';
import applicationAddInfo from './applicationAddInfo';


const rootReducer = combineReducers({
	currentUserInfo,
	registerUserInfo,
	loading,
	initHashtags,
	clubAddInfo,
	initCategory,
	clubAddRecruitInfo,
	applicationAddInfo,
});

export function* rootSaga() {
	yield all
		([initHashtagsSaga(),
		registerUserSaga(),
		getUserInfoSaga(),
		initHomePageSaga(),
		clubAddSaga()
		]);
}

export default rootReducer;
