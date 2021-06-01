import { createAction, handleActions } from "redux-actions";

const INIT_CATEGORY_FORM = 'initCategory/INIT_CATEGORY';

export const initCategoryForm = createAction(INIT_CATEGORY_FORM);

const initialState = {
    category: ["IT", "HEALTH", "STARTUP", "FRIENDSHIP", "VOLUNTEER", "CULTURE", "LANGUAGE", "OTHERS"]
};


const initCategory = handleActions(
    {

    },
    initialState,
);

export default initCategory;