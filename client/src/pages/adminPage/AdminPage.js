import React, {useEffect} from 'react'
import AddingCourses from "../../components/addingСourses/AddingCourses"
import {getPayApi} from "../../axios/payApi"
import {useDispatch, useSelector} from "react-redux"
import classes from "./admin.module.css"

function AdminPage() {
    const dispatch = useDispatch()
    const {pay} = useSelector(state => state.reviewReducer)
    console.log(pay)

    useEffect(() => {
        dispatch(getPayApi())
    }, [dispatch])

    return (
        <div className="wrapper container">
            <AddingCourses/>
            <div className={classes.container_content}>
                <h1 >Заявки</h1>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Телефон</th>
                        <th>Карта</th>
                        <th>Товар</th>
                        <th>Оплата</th>
                    </tr>
                    </thead>
                    <tbody>
                    {pay.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.user.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.personal_account}</td>
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

export default AdminPage