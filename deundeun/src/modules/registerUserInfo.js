import { createAction, handleActions } from "redux-actions";

const CHANGE_FIELD = "registerUserInfo/CHANGE_FIELD"
const INITIAL_FIELD = "regsiterUserInfo/INITIAL_FIELD";

export const changeField = createAction(CHANGE_FIELD);
export const initialField = createAction(INITIAL_FIELD);

const initialState = {
    nickname: "",
    hashtags: [],
};

const registerUserInfo = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { type, value } }) => ({
            ...state,
            [type]: value,
        }),
        [INITIAL_FIELD]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form],
        })
    },
    initialState,
);

export default registerUserInfo;

