import { combineReducers,configureStore } from "@reduxjs/toolkit"; 
import { logger } from "redux-logger";
import  thunk  from "redux-thunk";
import usersReducer  from "./reducers/usersSlice"

const store = configureStore({
    reducer: {
        users: usersReducer,
    },
    middleware: [logger,thunk]
  }); 

export default store;