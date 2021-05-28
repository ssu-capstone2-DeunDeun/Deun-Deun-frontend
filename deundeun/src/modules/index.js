import { combineReducers } from "../../node_modules/redux/";
import currentUser from "./currentUser";
import loading from "./loading";
import registerUserInfo from "./registerUserInfo";
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    currentUser, registerUserInfo, loading,
});

export function* rootSaga() {
    yield all([]);
};


export default rootReducer;