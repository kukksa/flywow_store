import { createSlice } from "@reduxjs/toolkit";

export const classesSlice = createSlice({
    name: 'classes',
    initialState: {
        selectedCategory: 'ПОКАЗАТЬ ВСЁ'
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }

    }
})

export const getSelectedCategory = state => state.classes.selectedCategory;
export const { filterCategory } = classesSlice.actions;
export default classesSlice.reducer;