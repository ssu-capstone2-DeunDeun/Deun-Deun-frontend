import { createAction, handleActions } from "redux-actions";

const CURRENT_USER_INFO = "loginUserInfo/CURRENT_USER_INFO";

const currentUserInfo = createAction(CURRENT_USER_INFO);

const initialState = {
    nickname: "",
    name: "",
    email: "",
    userImageUrl: "",
    hashtag: [],
};

const currentUser = handleActions(
    {
        [CURRENT_USER_INFO]: (state, { payload: type, value }) => ({
            ...state,
            [type]: value,
        }),
    },
    initialState
);

export default currentUser;