import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./headerSlice";

const store=configureStore({
    reducer:{
        header:headerSlice,
    }

})

export default store;