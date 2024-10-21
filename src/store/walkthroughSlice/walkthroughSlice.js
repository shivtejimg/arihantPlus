import { createSlice } from '@reduxjs/toolkit';

const walkthroughSlice = createSlice({
    name: 'walkthrough',
    initialState: [],
    reducers: {
      addWalkThrough: (state,action) =>{
         return [...action.payload];
        },
    },
  });


  export const {  addWalkThrough } = walkthroughSlice.actions;
  export const walkthroughSliceReducer = walkthroughSlice.reducer;