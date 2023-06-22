import React, {useEffect} from 'react'
import {getPayApi} from "../../axios/payApi"
import {useDispatch, useSelector} from "react-redux"
import classes from "./userPage.module.css"

function UserPage() {
    const dispatch = useDispatch()
    const {pay} = useSelector(state => state.reviewReducer)
    console.log(pay)

    useEffect(() => {
        dispatch(getPayApi())
    }, [dispatch])

    return (
        <div className="wrapper container">
            <div className={classes.container_content}>
                <h1 >Заявки</h1>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Товар</th>
                        <th>Оплата</th>
                    </tr>
                    </thead>
                    <tbody>
                    {pay.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.user.name}</td>
                            <td>{item.product.title}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserPage