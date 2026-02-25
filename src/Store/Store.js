import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Slices/Counterslice";
import authSlice from "../Slices/Authslices";
import userSlice from "../Slices/UserSlice";
export const store=configureStore({
    reducer:{
        counter:counterSlice.reducer,
        Auth:authSlice.reducer,
        User:userSlice.reducer,


    }
})