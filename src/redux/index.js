import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import usersReducer from "./usersReducer";
import dataReducer from "./dataReducer";

const reducers = combineReducers({
    users: usersReducer,
    currentUser: dataReducer,
});

export default () => {
    return createStore(reducers, applyMiddleware(thunk));
};
