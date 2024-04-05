import { combineReducers } from "redux";
import editReducer from "../redux/editBook/Reducer";
import addReducer from "../redux/addBooks/Reducer";

const rootReducer = combineReducers({
    addToBooks : addReducer,
    editBook : editReducer
})

export default rootReducer;