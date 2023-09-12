import { createSlice } from "@reduxjs/toolkit";


const headerSlice= createSlice({
    name:"header",
    initialState:{
        hamIcon:true
    },
    reducers:{
        toggleHamIcon:(state)=>{
            state.hamIcon = !state.hamIcon;
        },
        closeSideBar:(state)=>{
            state.hamIcon=false;
        }
    }
})

export const{toggleHamIcon,closeSideBar}=headerSlice.actions;
export default headerSlice.reducer;