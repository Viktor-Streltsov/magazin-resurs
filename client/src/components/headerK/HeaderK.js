import React, {useEffect} from 'react'
import classes from "./headerK.module.css"
import {links} from "../../links/links"
import {Link, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {setIsAuth} from "../../store/slices/userSlice"
import {getProductsApi} from "../../axios/productApi"

function HeaderK() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {isAuth, user} = useSelector(state => state.userReducer)

    const logOut = () => {
        dispatch(setIsAuth(false))
    }
    const admin = () => {
        navigate(links.admin)
    }
    const userCabinet = () => {
        navigate(`/user/${user.id}/`)
    }

    return (
        <header className={classes.header}>

            <a href="#" className={classes.logo}> groco </a>

            <nav className={classes.navbar}>
                <Link to={links.base}>Главная</Link>

                {isAuth ?
                    <>
                        <span>Вы вошли как: "{user.name}"</span>
                        <button
                            className={classes.btn_nav1}
                            onClick={userCabinet}>Кабинет</button>
                        <                            button onClick={logOut}>Выход</button>
                        {user.role === "ADMIN"
                            ?
                            <button onClick={admin}>Admin</button>
                            :
                            ''
                        }
                    </>
                    :
                    <>
                            <Link to={links.login}>Вход</Link>
                            <Link to={links.signup}>Регистрация</Link>
                    </>
                }
            </nav>
        </header>
    )
}

export default HeaderK