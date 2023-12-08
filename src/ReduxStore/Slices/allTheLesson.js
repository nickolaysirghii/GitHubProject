import { createSlice  } from "@reduxjs/toolkit";

const data = [
    {
        id: 1,
        title: "first",
        idName: "numbOne"
    },
    {
        id: 2,
        title: "second",
        idName: "numbTwo"
    },
    {
        id: 3,
        title: "third",
        idName: "numbThree"
    },

];

const initialState = {
Lessons: data,
chosenLesson: data[0]

};
export const AllTheLessons = createSlice({
    name: "AllTheLessons",
    initialState,
    reducers: {
    pickUpLesson: (state , action) => {
        state.chosenLesson = data.find((element) => element.id === action.payload);
    }
    },
}
);
export const { pickUpLesson } = AllTheLessons.actions;
export default AllTheLessons.reducer;