import React from 'react'

import '../../css/Modal.css'

const Calculator = ({active, setActive}) => {
    return(
        <div className={active ? "active" : "non-active"} onClick={() => setActive(false)}>
            <div className="content" onClick={e => e.stopPropagation()} >
                
            </div>
        </div>
    )
}

export default Calculator