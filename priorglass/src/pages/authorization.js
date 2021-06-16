import React from 'react'
import { useLocation } from 'react-router-dom'
import { LOGIN_ROUTE } from '../routes/consts'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Authorizaton = () => {

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    // ------ Разработать регистрацию + авторизацию в здесь ------ //

    // ------ Применяй переменную isLogin как проверку строки ------ //
    // ------ запроса для определения Регистрации или Авторизации  ------ //

    return (
        <main>
            <h1 className="mt-3 d-flex justify-content-center">{isLogin ? "Авторизация" : "Регистрация"}</h1>
            <Form className="my-3 w-25 d-flex flex-column mx-auto">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Пароль" />
                </Form.Group>
                <Button variant="primary" type="submit">{isLogin ? "Войти" : "Зарегистрироваться"}</Button>
            </Form>
        </main>
    )
}

export default Authorizaton
