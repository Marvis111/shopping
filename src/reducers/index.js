import { combineReducers } from "redux";
import { allProductReducer } from "./productReducer";

export  const rootReducer = combineReducers({
    allProducts:allProductReducer
});