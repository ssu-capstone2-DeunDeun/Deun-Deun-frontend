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
import write, { writeSaga } from './write';
import currentClubPostList, { currentClubPostListSaga } from './currentClubPostList';
import likePost, { likePostSaga } from './likePost';


const rootReducer = combineReducers({
	currentUserInfo,
	registerUserInfo,
	loading,
	initHashtags,
	clubAddInfo,
	initCategory,
	clubAddRecruitInfo,
	applicationAddInfo,
	write,
	currentClubPostList,
	initHomePage,
	likePost
});



export function* rootSaga() {
	yield all
		([initHashtagsSaga(),
		registerUserSaga(),
		getUserInfoSaga(),
		initHomePageSaga(),
		clubAddSaga(),
		writeSaga(),
		currentClubPostListSaga(),
		likePostSaga(),
		]);
}

export default rootReducer;
