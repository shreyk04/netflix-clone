import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from './moviesSlice'
<<<<<<< HEAD
import gptReducer from "./gptSlice";
import configReducer from './configSlice'

const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gpt:gptReducer,
        config:configReducer
=======
const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer
>>>>>>> eab811a176b5c517c24fb9d0d8f5c6146e6cc3cd
    },
});
export default appStore;