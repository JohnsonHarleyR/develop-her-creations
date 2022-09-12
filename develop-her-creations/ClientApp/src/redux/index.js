import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "../theme/redux/reducer";

const store = configureStore({
    reducer: combineReducers({
        theme: ThemeReducer,
    }),
});

export default store;