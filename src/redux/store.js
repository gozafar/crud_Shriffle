import { configureStore } from '@reduxjs/toolkit';
// import todoReducer from '../features/todo/todoSlice';
import userData from './userData';
export default configureStore({
  reducer: {
    user: userData,
  },
});

// export const store =