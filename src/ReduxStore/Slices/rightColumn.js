import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
rightColumnClass: "rightColumnClosed"

};
export const rightColumnSlice = createSlice({
    name: "rightColumnSlice",
    initialState,
    reducers: {
     changeRightClass: (state , action)=>{
        if(action.payload){
            state.rightColumnClass = "rightColumnOpen"
        }else{
            state.rightColumnClass = "rightColumnClosed" 
        }
       }
    
    },
    },

);
export const {changeRightClass} = rightColumnSlice.actions;
export default rightColumnSlice.reducer;