import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MenuStyleSlice from "./MenuStyleSlice";


const store = configureStore({
    reducer:{menuStyle:MenuStyleSlice}
})
export default store