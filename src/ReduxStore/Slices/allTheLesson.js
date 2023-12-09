import { createSlice  } from "@reduxjs/toolkit";

const data = [
    {
        id: 1,
        title: "first",
        idName: "numbOne",
        theLimit: 3
    },
    {
        id: 2,
        title: "second",
        idName: "numbTwo",
        theLimit: 2
    },
    {
        id: 3,
        title: "third",
        idName: "numbThree",
        theLimit: 6
    },
    {
        id: 4,
        title: "forth",
        idName: "numbThree",
        theLimit: 5
    },
    {
        id: 5,
        title: "fifth",
        idName: "numbThree",
        theLimit: 7
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