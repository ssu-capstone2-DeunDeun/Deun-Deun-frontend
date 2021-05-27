import { combineReducers } from "../../node_modules/redux/";
import currentUser from "./currentUser";
import registerUserInfo from "./registerUserInfo";



const rootReducer = combineReducers({
    currentUser, registerUserInfo,
})

export default rootReducer;