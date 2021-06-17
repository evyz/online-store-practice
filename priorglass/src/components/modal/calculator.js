import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import '../../css/Modal.css'

const Calculator = ({active, setActive}) => {
    return(
        <div className={active ? "active" : "non-active"} onClick={() => setActive(false)}>
            <div className="content" onClick={e => e.stopPropagation()} >
                <h1 className="mb-3">Калькулятор</h1>
                <Form className="calcForm">
                    <h3 className="mb-3">Расчет стоимости стекла</h3>
                    <Form.Row className="mb-3">
                        <Col>
                            <Form.Label>Вид стекла</Form.Label>
                            <Form.Control as="select">
                                <option>Прозрачное стекло</option>
                                <option>Осветленное стекло</option>
                                <option>Тонированное серое стекло</option>
                                <option>Тонированное бронзовое стекло</option>
                                <option>Матовое стекло</option>
                                <option>Зеркало</option>
                                <option>Зеркало осветленное</option>
                                <option>Стеклопакет однокамерный 4-16-4</option>
                                <option>Стеклопакет двухкамерный 4-10-4-10-4</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Толщина</Form.Label>
                            <Form.Control as="select">
                                <option>4 мм</option>
                                <option>5 мм</option>
                                <option>6 мм</option>
                                <option>8 мм</option>
                                <option>10 мм</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Форма</Form.Label>
                            <Form.Control as="select">
                                <option>Прямоугольник</option>
                                <option>Фигура</option>
                                <option>Круг</option>
                            </Form.Control>
                        </Col>
                    </Form.Row>

                    <Form.Row className="mb-3">
                        <Col>
                            <Form.Label>Ширина, мм: </Form.Label>
                            <Form.Control as="select">
                                <option>100</option>
                                <option>200</option>
                                <option>500</option>
                                <option>1000</option>
                                <option>1500</option>
                                <option>2000</option>
                                <option>2500</option>
                                <option>5000</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Высота, мм: </Form.Label>
                            <Form.Control as="select">
                                <option>100</option>
                                <option>200</option>
                                <option>500</option>
                                <option>1000</option>
                                <option>1500</option>
                                <option>2000</option>
                                <option>2500</option>
                                <option>5000</option>
                            </Form.Control>
                        </Col>
                    </Form.Row>

                    <Form.Row className="mb-3">
                        <Col>
                            <Form.Label>Кол-во отверстий</Form.Label>
                            <Form.Control as="select">
                                <option>-</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Толщина</Form.Label>
                            <Form.Control as="select">
                                <option>4 мм</option>
                                <option>5 мм</option>
                                <option>6 мм</option>
                                <option>8 мм</option>
                                <option>10 мм</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Форма</Form.Label>
                            <Form.Control as="select">
                                <option>Прямоугольник</option>
                                <option>Фигура</option>
                                <option>Круг</option>
                            </Form.Control>
                        </Col>
                    </Form.Row>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default Calculator