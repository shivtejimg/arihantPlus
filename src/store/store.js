import { configureStore } from '@reduxjs/toolkit';
import { walkthroughSliceReducer } from './walkthroughSlice/walkthroughSlice';
import { userSliceReducer } from './user/userSlice';

export default configureStore({
  reducer: {
    walkthrough:walkthroughSliceReducer,
    user:userSliceReducer
  },
});