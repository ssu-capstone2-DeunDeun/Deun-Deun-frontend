import { createAction, handleActions } from "redux-actions"

const CHANGE_INPUT = "clubAddRecruitInfo/CHANGE_INPUT";

export const changeInput = createAction(CHANGE_INPUT);


const initialState = {
    "content": "",
    "documentPassEndDate": "",
    "documentPassStartDate": "",
    "finalPassEndDate": "",
    "finalPassStartDate": "",
    "generation": 0,
    "interviewEndDate": "",
    "interviewStartDate": "",
    "submitEndDate": "",
    "submitStartDate": "",
    "title": "",
}

const clubAddRecruitInfo = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: type, value }) => ({
            ...state,
            [type]: value,
        })
    },
    initialState,
)

export default clubAddRecruitInfo;