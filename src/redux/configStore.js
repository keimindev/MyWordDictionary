import {createStore, combineReducers, applyMiddleware, compose } from "redux";
import reducer from "./modules/reducer";
import thunk from "redux-thunk";

const middlewarese = [thunk];
const enhancer = applyMiddleware(...middlewarese);
const rootReducer = combineReducers({reducer});
const store = createStore(rootReducer, enhancer)

export default store
