import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { ToDo } from "./todo";

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			toDo: ToDo,
		}),
		applyMiddleware(thunk, logger)
	);
	return store;
};
