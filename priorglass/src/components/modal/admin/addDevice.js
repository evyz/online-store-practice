import React, { useContext } from 'react'

import { observer } from 'mobx-react-lite'

import { Dropdown } from 'react-bootstrap'
import '../../../css/Modal.css'

import {Context} from '../../../index'

const AddDevice = observer(({active, setActive}) => {

    const {device} = useContext(Context)


    // ------ Доделать: ------- //

    // ------ Стили формы -------//
    // ------ Запись инпутов и кнопку ------- //


    return (
        <div className={active ? "active" : "non-active"} onClick={() => setActive(false)} >
            <div className="content" onClick={e => e.stopPropagation()} >
                <h1>Добавить товар</h1>
                <input type="text"  />
                <input type="number" />
                <input type="number" />

                <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Выберите тип стекла</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type => 
                               <Dropdown.Item
                                key={type.id}    
                               >
                                   {type.name}
                               </Dropdown.Item>                                
                            )}
 

                        </Dropdown.Menu>
                    </Dropdown>

            </div>
        </div>
    )
})

export default AddDevice