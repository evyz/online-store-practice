import React from 'react'

const Basket = () => {


    // ------ Моковые данные для корзины ----- //
    
    const devices = [
        {id: 1, name: "Какое-нить", price: 1000, width: 100, height: 200, typeId: 1},
        {id: 2, name: "Какое-нить 2", price: 1500, width: 100, height: 200, typeId: 1}
    ]

    // ------ Сделать также подсчёт всей суммы, на которую набрал юзер в корзину ----- //


    return (
        <div>
            basket
        </div>
    )
}

export default Basket;