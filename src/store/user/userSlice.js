import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
      updateUserDetail: (state,action) =>{
         return { ...state,...action?.payload};
        },
    },
  });


  export const {  updateUserDetail } = userSlice.actions;
  export const userSliceReducer = userSlice.reducer;