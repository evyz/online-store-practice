import React from 'react'
import { useLocation } from 'react-router-dom'
import { LOGIN_ROUTE } from '../routes/consts'

const Authorizaton = () => {

    const location = useLocation()
    const isLogin = location === LOGIN_ROUTE

    // ------ Разработать регистрацию + авторизацию в здесь ------ //

    // ------ Применяй переменную isLogin как проверку строки ------ //
    // ------ запроса для определения Регистрации или Авторизации  ------ //

    return (
        <div>
            {isLogin ? "Авторизация" : "Регистрация"}
        </div>
    )
}

export default Authorizaton