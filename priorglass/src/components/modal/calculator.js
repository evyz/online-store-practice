import React from 'react'

import '../../css/Modal.css'

const Calculator = ({active, setActive}) => {
    return(
        <div className={active ? "active" : "non-active"} onClick={() => setActive(false)}>
            <div className="content" onClick={e => e.stopPropagation()} >
                <h1>Калькулятор</h1>
            </div>
        </div>
    )
}

export default Calculator