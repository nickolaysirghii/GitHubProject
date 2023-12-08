import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
leftColumnClass: "leftColumnClosed"

};
export const leftColumnSlice = createSlice({
    name: "leftColumnSlice",
    initialState,
    reducers: {
     changeClass: (state , action)=>{
        if(action.payload){
            state.leftColumnClass = "leftColumnOpen"
        }else{
            state.leftColumnClass = "leftColumnClosed" 
        }
    }
    
    },
    },

);
export const {changeClass} = leftColumnSlice.actions;
export default leftColumnSlice.reducer;