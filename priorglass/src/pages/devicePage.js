import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
                <img className="my-3 d-flex mx-auto" src="https://via.placeholder.com/500x400" />
                <Container className="my-3">
                    <Row>
                        <Col sm={8}>
                            <h1>{device.name}</h1>
                            <p>Описание</p>
                            <h5>{device.price}&#8381;</h5>
                        </Col>
                        <Col sm={4}>
                            <Button>Добавить в корзину</Button>
                        </Col>
                    </Row>
                </Container>
            </div> 
        : // ----- Разработать вёрстку страницы, если не был найден продукт под таким айди
            <div className="d-flex flex-column align-items-center my-3">
                <h1>404</h1>
                <h5>Товар не найден</h5>
            </div>
        }
        </>
    )
}

export default DevicePage;