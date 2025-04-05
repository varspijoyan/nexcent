import { combineReducers } from "redux";
import { authorizationReducer } from "./authorizationReducer";

const rootReducers = combineReducers({ auth: authorizationReducer });

export default rootReducers;