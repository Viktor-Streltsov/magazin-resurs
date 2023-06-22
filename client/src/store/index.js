import {configureStore} from "@reduxjs/toolkit"
import userReducer from './slices/userSlice'
import productReducer from './slices/productSlice'
import reviewReducer from './slices/reviewSlice'



export const store = configureStore({
    reducer: {
        userReducer,
        productReducer,
        reviewReducer,
    }
})