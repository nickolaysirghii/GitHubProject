import { configureStore } from "@reduxjs/toolkit";
import animation  from "./Slices/animationSlice";


export const store = configureStore({
    reducer: {
     transform: animation
    }
});