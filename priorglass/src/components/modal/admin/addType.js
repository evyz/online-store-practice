import React, { useState } from 'react'

import '../../../css/Modal.css'
import { createType } from '../../../http/deviceApi'

const AddType = ({active, setActive}) => {
    const [name, setName] = useState('')

    const addType = () => {
        try{
            createType(name).then(data => {
                setActive(false)
            })
        } catch (e) {
            alert(e)
        }
    }

    return(
        <div className={active ? "active" : "non-active"} onClick={() => setActive(false)} >
            <div className="content" onClick={e => e.stopPropagation()}>
                <h1>Создать тип</h1>

                <input  type="text" value={name} onChange={e => setName(e.target.value)}  placeholder="Напишите тип здесь" />
                <button  class="mt-3 btn btn-primary" onClick={addType}>Создать</button>
            </div>
        </div>
    )
}

export default AddType