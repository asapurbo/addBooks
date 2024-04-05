import initialState from "./InitialState";
import { ADDBOOKS, DELETED, FETCHCART, UPDATEBOOK } from '../addBooks/ActionsTypes';
import nextId from "./CreateId";

// Reducer 
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHCART:
            return [
                ...action.payload
            ]
        case ADDBOOKS:
            return [
                ...state,
                {
                    ...action.payload,
                    id: nextId(state)
                }
            ]
        case DELETED:
            return state.map((item) => {
                if(item.id === action.payload) {
                    return null;
                }
                return item;
            }).filter((item) => item !== null);

        case UPDATEBOOK:
            // eslint-disable-next-line no-case-declarations
            const {id} = action.payload;
            return state.map((item) => {
                if(item.id === id) {
                   return {
                        ...action.payload
                    }
                }
                return item;
            })
    
        default:
            return state;
    }
}

export default Reducer;