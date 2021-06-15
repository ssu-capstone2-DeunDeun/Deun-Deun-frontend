import { createAction, handleActions } from "redux-actions";

const INPUT_VALUE = "sendMsgForm/INPUT_VALUE";
const INITIAL_VALUE = "sendMsgForm/INITIAL_VALUE";

export const inputValue = createAction(INPUT_VALUE);
export const initialValue = createAction(INITIAL_VALUE);


const initialState = {
    clubId: null,
    contentType: "ㅇ",
    emails: [],
    phoneNumbers: [],
    message: "",
}

const sendMsgForm = handleActions(
    {
        [INPUT_VALUE]: (state, { payload: { type, value } }) => ({
            ...state,
            [type]: value,
        }),
        [INITIAL_VALUE]: (state) => initialState,
    },
    initialState,
);

export default sendMsgForm;