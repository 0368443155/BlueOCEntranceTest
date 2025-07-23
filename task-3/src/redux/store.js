import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlicer';

export const store = configureStore({
    reducer:{
        post: postReducer
    }
    
});