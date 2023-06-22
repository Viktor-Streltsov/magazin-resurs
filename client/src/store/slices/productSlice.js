import {createSlice} from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        products: [],
        product: {},
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setProduct: (state, action) => {
            state.product = action.payload
        }
    }
})

export const {
    setProducts,
    setProduct

} = productSlice.actions

export default productSlice.reducer