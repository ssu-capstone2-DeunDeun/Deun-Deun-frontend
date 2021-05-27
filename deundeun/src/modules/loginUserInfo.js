import { createAction, handleActions } from "redux-actions";

const INPUT_LOGIN_USER_INFO = "loginUserInfo/INPUT_LOGIN_USER_INFO";

const inputLoginUserInfo = createAction(INPUT_LOGIN_USER_INFO);

const initialState = {
    nickname: "",
    name: "",
    email: "",
    userImageUrl: "",
    hashtag: [],
};

const loginUserInfo = handleActions(
    {
        [inputLoginUserInfo]: (state, { payload: type, value }) => ({
            ...state,
            type: value,
        }),
    },
    initialState
);

export default loginUserInfo;