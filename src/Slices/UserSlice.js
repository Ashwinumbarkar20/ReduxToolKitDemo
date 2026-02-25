import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"User",
    initialState:{
        userName:"",
        userEmail:"",
        userId:"",
        userRoles:""
    },
    reducers:{
    setUser:(state,action)=>{
state.userName=action.payload.userName;
state.userName=action.payload.userEmail;
state.userName=action.payload.userId;
state.userName=action.payload.userRoles;

    }
}
})
export const {setUser}=userSlice.actions
export default userSlice