import {$api, } from "./index"
import {setError} from "../store/slices/errorSlice"
import {setPay} from "../store/slices/reviewSlice"
import {setProduct} from "../store/slices/productSlice"

export const getPayApi = () => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/pay/`)
            dispatch(setPay(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

export const addPayApi = (formData) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/pay/', formData)
            if (data.status === 200) {
                alert('Вы успешно добавили оплату')
            }
        } catch (e) {
            alert(e)
        }
    }
}

export const getOnePayApi = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/pay/${id}`)
            dispatch(setProduct(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}
