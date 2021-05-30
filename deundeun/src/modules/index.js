import { combineReducers } from "../../node_modules/redux/";
import currentUserInfo, { getUserInfoSaga } from "./currentUserInfo";
import loading from "./loading";
import registerUserInfo, { registerUserSaga } from "./registerUserInfo";
import { all } from 'redux-saga/effects';
import initHashtags, { initHashtagsSaga } from "./initHashtags";

const rootReducer = combineReducers({
    currentUserInfo, registerUserInfo, loading, initHashtags,
});

export function* rootSaga() {
    yield all([initHashtagsSaga(), registerUserSaga(), getUserInfoSaga()]);
};
export default rootReducer;
