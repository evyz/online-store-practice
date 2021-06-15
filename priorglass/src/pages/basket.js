import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Basket = () => {


    // ------ Моковые данные для корзины ----- //
    
    const devices = [
        {id: 1, name: "Какое-нить", price: 1000, width: 100, height: 200, typeId: 1},
        {id: 2, name: "Какое-нить 2", price: 1500, width: 100, height: 200, typeId: 1},
        {id: 3, name: "Какое-нить 3", price: 2500, width: 100, height: 200, typeId: 1},
        {id: 4, name: "Какое-нить 4", price: 2000, width: 100, height: 200, typeId: 1},
        {id: 4, name: "Какое-нить 4", price: 2000, width: 100, height: 200, typeId: 1},
        {id: 4, name: "Какое-нить 4", price: 2000, width: 100, height: 200, typeId: 1},
        {id: 4, name: "Какое-нить 4", price: 2000, width: 100, height: 200, typeId: 1},
        {id: 4, name: "Какое-нить 4", price: 2000, width: 100, height: 200, typeId: 1},
        {id: 4, name: "Какое-нить 4", price: 2000, width: 100, height: 200, typeId: 1},
        {id: 4, name: "Какое-нить 4", price: 2000, width: 100, height: 200, typeId: 1},
        {id: 4, name: "Какое-нить 4", price: 2000, width: 100, height: 200, typeId: 1},
        {id: 5, name: "Какое-нить 5", price: 5500, width: 100, height: 200, typeId: 1}
    ]

    // ------ Сделать также подсчёт всей суммы, на которую набрал юзер в корзину ----- //

    let sum = devices.reduce(function(prev, current) {
        return prev + current.price
    }, 0);

    // ------ Узнать есть ли что-нибудь в корзине ------ //



    return (
        <main>
            <Container className="mt-3">
                <Row>
                    <Col className="d-flex flex-wrap" sm={8}>
                        {devices.map(device => 
                            <div className="w-25 m-3" key={device.id}>
                                <img src="https://via.placeholder.com/100" />
                                <h5>{device.name}</h5> 
                                <p className="d-inline-block">{device.price}</p>
                                <Button className="ml-3">Удалить</Button>
                            </div>
                        )}
                    </Col>
                    <Col sm={4}>
                        <div className="position-fixed my-3">
                            <p>Общая стоимость: {sum}&#8381;</p>
                            <Button>Оформить заказ</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Basket;