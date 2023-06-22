import React, {useEffect} from 'react'
import classes from "./productsPage.module.css"
import {useDispatch, useSelector} from "react-redux"
import Product from "../../components/product/Product"
import {getProductsApi} from "../../axios/productApi"

function ProductsPage() {

    const {products} = useSelector(state => state.productReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsApi())
    }, [dispatch])

    return (
        <section className={classes.cont}>
        <div className={classes.products}>
                {
                    products.map(product => <Product key={product.id} product={product}/>)
                }
        </div>
        </section>
    )
}

export default ProductsPage