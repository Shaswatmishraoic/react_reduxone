import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../feature/StudentSlice';

export default configureStore({
    reducer: {
        Student: studentReducer 
    }
});