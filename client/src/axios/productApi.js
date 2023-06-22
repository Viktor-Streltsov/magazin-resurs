import {$api, } from "./index"
import {setError} from "../store/slices/errorSlice"
import {setProduct, setProducts} from "../store/slices/productSlice"

export const getProductsApi = () => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/product/`)
            console.log("data.count",data.count)
            dispatch(setProducts(data.rows))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

export const getCourseApi = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/product/${id}`)
            dispatch(setProduct(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

export const addProductApi = (formData) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/product/', formData)
            if (data.status === 200) {
                alert('Вы успешно добавили товар')
            }
        } catch (e) {
            alert(e)
        }
    }
}

