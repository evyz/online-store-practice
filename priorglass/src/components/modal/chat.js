import React, { useState } from 'react'

import '../../css/Modal.css'

import close from '../../assets/ico/close.svg'
import send from '../../assets/ico/paper-plane.svg'
import jwtDecode from 'jwt-decode'
import { LOGIN_ROUTE } from '../../routes/consts'

const Chat = ({active, setActive}) => {

    const [err, setErr] = useState(false)

    if(localStorage.getItem('token')){
        const decoded = jwtDecode(localStorage.getItem('token'))
        if(decoded){
            const {email} = decoded.email
        }
    }

    return ( 
        <div className={active ? "chat" : "non-chat"}>
            <div className="content" onClick={e => e.stopPropagation()} >
                <row>
                    <h1>Чат</h1> 
                    <img  src={close} onClick={() => setActive(false)} />
                </row>

                <div className="message">
                    {!localStorage.getItem('token') ? 
                        <span><a href={LOGIN_ROUTE}>Авторизуйтесь</a> для того, чтобы отправить сообщение</span>
                    : 
                        <div className="dialog">
                            <div className="msg">
                                Здравствуйте! Задавайте свои вопросы сюда и мы вам ответим в течении 10 минут.
                            </div>
                            <div className="msg user">
                                Здравствуйте!
                            </div>
                        </div>
                    }
                </div>

                <div className="add">
                    <input placeholder="Введите сообщение" />
                    <div className="send bg-primary"> 
                        <img src={send} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat