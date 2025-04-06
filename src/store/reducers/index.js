import { combineReducers } from "redux";
import { authReducers } from "./authReducer";

const rootReducer = combineReducers({authorization: authReducers});

export default rootReducer;