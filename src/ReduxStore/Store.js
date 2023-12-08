import { configureStore } from "@reduxjs/toolkit";
import BackgroundPictue  from "./Slices/timeRun";
import leftColumnSlice from "./Slices/leftColumn";
import rightColumnSlice  from "./Slices/rightColumn";
import allTheLesson from "./Slices/allTheLesson";


export const store = configureStore({
    reducer: {
     BackImage: BackgroundPictue,
     leftColll: leftColumnSlice,
     rihtColll: rightColumnSlice,
     allOfTheLessons: allTheLesson
    }
});