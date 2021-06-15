import React from 'react'
import { useParams } from 'react-router-dom'

const DevicePage = () => {


    // ------ Моковые данные для имитации товара ------ //
    const device = {id: 1, name: "Какое-нить", price: 1000, width: 100, height: 200, typeId: 1}


    // ------ Для вёрстки и проверки ошибки, неверный айди будет 100 ------ //

    let error = false;
    const {id} = useParams()
    if(id === 100){
        error = true
    }

    

    return (
        <>
        {!error ? // ---- Разработать вёрстку страницы с продуктом
            <div>
                {device.name} 
            </div> 
        : // ----- Разработать вёрстку страницы, если не был найден продукт под таким айди
            <div>
                
            </div>
        }
        </>
    )
}

export default DevicePage;