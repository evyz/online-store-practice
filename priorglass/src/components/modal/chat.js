import React from 'react'

import '../../css/Modal.css'

import close from '../../assets/ico/close.svg'
import send from '../../assets/ico/paper-plane.svg'

const Chat = ({active, setActive}) => {
    return ( 
        <div className={active ? "chat" : "non-chat"}>
            <div className="content" onClick={e => e.stopPropagation()} >
                <row>
                    <h1>Чат</h1> 
                    <img  src={close} onClick={() => setActive(false)} />
                </row>

                <div className="message">
                    1
                </div>

                <div className="add">
                    <input placeholder="Введите сообщение" />
                    <img src={send} className="send" />
                </div>
            </div>
        </div>
    )
}

export default Chat