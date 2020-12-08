
import { createStore } from "redux";
import formReducers from "../reducers/formReducers";

export const store = createStore(formReducers);