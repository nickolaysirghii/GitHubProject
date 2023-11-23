import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
position: 0

};
export const animation = createSlice({
    name: "animation",
    initialState,
    reducers: {
      spean: (state , action)=>{
        if(action.payload === "rotateUp"){
            state.position += 90
        }else{
            state.position -= 90
        }
      }
    },
    },

);
export const {spean} = animation.actions;
export default animation.reducer;