import {
  EDITBOOK,
  EDITBOOKDELETED,
  SEARCHRESULT,
  STATUS,
} from "../editBook/ActionsTypes";

// Initial State
const initialState = {
  data: [],
  itemStatus: "All",
  searchResult: "",
};

// Reducer
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case EDITBOOK:
      return {
        ...state,
        data: [action.payload],
      };
    case EDITBOOKDELETED:
      return {
        ...state,
        data: [],
      };

    case STATUS:
      return {
        ...state,
        itemStatus: action.payload,
      };

    case SEARCHRESULT:
      return {
        ...state,
        searchResult: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
