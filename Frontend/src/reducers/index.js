import {combineReducers} from "redux";
import ApplicationReducer from "./reducer-application";
import NewApplicationReducer from "./reducer-newApplication";
import SinglePostReducer from "./reducer-singlepost";
import authReducer from "./reducer-auth";
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
	applications:ApplicationReducer,
	form:formReducer,
	newpost:NewApplicationReducer,
	post:SinglePostReducer,
	auth:authReducer,
})
export default rootReducer;