import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name:"counter",
    initialState:0,
    reducers:{
        Increament1:(state)=>state+1,
        Decreament1:(state)=>state-1
    }
})

export const {Increament1,Decreament1}=counterSlice.actions
export default counterSlice.reducer