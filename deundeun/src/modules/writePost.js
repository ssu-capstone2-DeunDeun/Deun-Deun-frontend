import { createAction, handleActions } from "redux-actions";

const CHANGE_FIELD = 'writePost/CHANGE_FIELD';
const INITIAL_FIELD = 'writePost/INITIAL_FIELD';

export const changeField = createAction(CHANGE_FIELD);
export const initialField = createAction(INITIAL_FIELD);


const initialState = {
    title: "",
    content: "",
    thumbnailUrl: "",
}

const writePost = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value,
        }),
        [INITIAL_FIELD]: state => initialState,
    },
    initialState
);

export default writePost;