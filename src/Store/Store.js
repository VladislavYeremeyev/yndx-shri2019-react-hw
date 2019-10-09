import { createStore } from "redux";
import { reducer } from "./reducers/Reducer.js";

export const store = createStore(reducer);
