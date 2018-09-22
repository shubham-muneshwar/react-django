import {combineReducers} from "redux";
import ApplicationReducer from "./reducer-application";
import NewApplicationReducer from "./reducer-newApplication";
import SinglePostReducer from "./reducer-singlenote";
import authReducer from "./reducer-auth";
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
	applications:ApplicationReducer,
	form:formReducer,
	newnote:NewApplicationReducer,
	note:SinglePostReducer,
	auth:authReducer,
})
export default rootReducer;
