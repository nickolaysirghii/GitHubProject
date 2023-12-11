import { createSlice  } from "@reduxjs/toolkit";

let StorageArray = JSON.parse(localStorage.getItem("PickOnArray"));

const initialState = {
Lessons: StorageArray,
chosenLesson: StorageArray[0]

};
export const AllTheLessons = createSlice({
    name: "AllTheLessons",
    initialState,
    reducers: {
    pickUpLesson: (state , action) => {
        state.chosenLesson = StorageArray.find((element) => element.id === action.payload);
    },
    sortLessons: (state , action) => {
        const XLess = []
        state.Lessons.forEach((elem) => {
            if(elem.title === action.payload){
             XLess.push(elem)
            }
        });
        state.Lessons = XLess
    }
    },
}
);
export const { pickUpLesson , sortLessons } = AllTheLessons.actions;
export default AllTheLessons.reducer;