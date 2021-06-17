import React, { useContext, useState } from 'react'

import { observer } from 'mobx-react-lite'

import { Dropdown } from 'react-bootstrap'
import '../../../css/Modal.css'

import {Context} from '../../../index'
import { createDevice } from '../../../http/deviceApi'

const AddDevice = observer(({active, setActive}) => {
    const {device} = useContext(Context)

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [width, setWidth] = useState('')
    const [height, setHeight] = useState('')

    const addDevice = () => {
        try{
            createDevice(name,price,width,height, device.type.id).then(data => setActive(false))
        } catch(e){
            alert(e)
        }
    }

    return (
        <div className={active ? "active" : "non-active"} onClick={() => setActive(false)} >
            <div className="content" onClick={e => e.stopPropagation()} >
                <h1>Добавить товар</h1>
                
                <input type="text"   value={name} onChange={e => setName(e.target.value)} placeholder="Название товара"  />
                <input type="text" value={price} onChange={e => setPrice(e.target.value)} placeholder="Цена товара"  />
                <input type="text" value={width} onChange={e => setWidth(e.target.value)} placeholder="Ширина товара"  />
                <input type="text" value={height} onChange={e => setHeight(e.target.value)} placeholder="Высота товара"  />

                <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Выберите тип стекла</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type => 
                               <Dropdown.Item
                                key={type.id}
                                onClick={() => device.setType(type)}
                               >
                                   {type.name}
                               </Dropdown.Item>                                
                            )}
 

                        </Dropdown.Menu>
                    </Dropdown>

                <button onClick={addDevice}>Добавить</button>

            </div>
        </div>
    )
})

export default AddDevice