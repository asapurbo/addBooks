import { applyMiddleware, createStore } from "redux";
import rootReducer from "./RootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

// Create Store 
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;