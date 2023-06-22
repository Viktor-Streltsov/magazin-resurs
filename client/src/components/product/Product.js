import React from 'react'
import {useNavigate} from "react-router-dom"
import classes from "./product.module.css"
import {useSelector} from "react-redux"

function Product({product}) {
    const navigate = useNavigate()

    const {isAuth} = useSelector(state => state.userReducer)

    const clickHandler = () => {
        if (!isAuth) {
            return alert("Авторизуйтесь")
        }
        navigate(`/pay/${product.id}/`)
    }

    return (
        <div className={classes.product}>
            <div onClick={clickHandler} className={classes.product_image}>
                <img src={process.env.REACT_APP_API_URL + product.img} alt={product.img}></img>
            </div>
            <div className={`${classes.icon_favorites}`}></div>
                    <div className={classes.product_info}>
                        <p className={classes.price}>{product.title}</p>
                        <p className={classes.name}>{product.description}</p>
                        <p className={classes.btn} onClick={clickHandler}>
                            <span>Оплатить</span>
                        </p>
                    </div>

        </div>
    )
}

export default Product