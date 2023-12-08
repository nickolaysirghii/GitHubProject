import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
firstNumb: 0,
secondNumb: 0,
limit: 3,
goLeft: false,
goStop: false,
goPlay: false,
goPause: false,
goForvard: false

};
export const BackgroundPictue = createSlice({
    name: "BackgroundPictue",
    initialState,
    reducers: {
      timeFromStart: (state) =>{
        state.firstNumb = 0;
        state.secondNumb = 0;
      },
      timeGoFirst: (state)=>{
        state.firstNumb = state.firstNumb + 1
      },
      timeGoSecond: (state)=>{
        state.secondNumb = state.firstNumb
      },
      startIt: (state)=>{
        state.goPlay = !state.goPlay;
        state.goStop = false;
        state.goPause = false;
        state.goForvard = false;
        state.goLeft = false;
        
      },
      stopIt: (state)=>{
        state.firstNumb = 0;
        state.secondNumb = 0;
        state.goStop = !state.goStop;
        state.goPlay = false;
        state.goPause = false;
        state.goForvard = false;
        state.goLeft = false;
        
      },
      leftIt: (state)=>{
        state.firstNumb = state.firstNumb - 1;
        state.goLeft = true;
        state.goStop = false;
        state.goPlay = false;
        state.goPause = false;
        state.goForvard = false;
      },
      pauseIt: (state)=>{
        state.goPause = !state.goPause;
        state.goLeft = false;
        state.goStop = false;
        state.goPlay = false;
        state.goForvard = false;
      },
      rightIt: (state)=>{
        state.firstNumb = state.firstNumb + 1;
        state.goForvard = true;
        state.goPause = false;
        state.goLeft = false;
        state.goStop = false;
        state.goPlay = false;
      }
      
    },
    },

);
export const {timeGoFirst , timeGoSecond , startIt , stopIt , leftIt ,
 pauseIt , rightIt , timeFromStart } = BackgroundPictue.actions;
export default BackgroundPictue.reducer;