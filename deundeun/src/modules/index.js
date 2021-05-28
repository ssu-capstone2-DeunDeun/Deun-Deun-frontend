import { combineReducers } from "../../node_modules/redux/";
import currentUser from "./currentUser";
import loading from "./loading";
import registerUserInfo from "./registerUserInfo";

const rootReducer = combineReducers({
    currentUser, registerUserInfo, loading,
})

export default rootReducer;