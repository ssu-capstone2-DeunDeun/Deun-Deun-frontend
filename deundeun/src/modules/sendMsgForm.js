import { createAction, handleActions } from "redux-actions";

const INPUT_VALUE = "sendMsgForm/INPUT_VALUE";
const INITIAL_VALUE = "sendMsgForm/INITIAL_VALUE";
const INPUT_CONTENT_TYPE = "sendMSgForm/INPUT_CONTENT_TYPE";

export const inputValue = createAction(INPUT_VALUE);
export const initialValue = createAction(INITIAL_VALUE);
export const inputContentType = createAction(INPUT_CONTENT_TYPE);


const initialState = {
    clubId: null,
    contentType: "",
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
        [INPUT_CONTENT_TYPE]: (state, { payload: value }) => ({
            ...state,
            contentType: value,
        })
    },
    initialState,
);

export default sendMsgForm;