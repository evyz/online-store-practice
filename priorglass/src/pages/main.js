import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Card from 'react-bootstrap/Card'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { useHistory } from 'react-router'
import { DEVICE_ROUTE } from '../routes/consts'
import { fetchDevices, fetchTypes } from '../http/deviceApi'

import '../css/Modal.css'

import chat from '../assets/ico/chat.svg'
import Chat from '../components/modal/chat'

const Main = observer(() => {
  
    const [chatActive, setChatActive] = useState(false)
    const {device} = useContext(Context)

    const history = useHistory()

    useEffect(() => {
      fetchTypes().then(data => {
        device.setTypes(data)
      });
      fetchDevices().then(data => {
        device.setDevices(data)
      })
    }, [])

    useEffect(() => {
      fetchDevices(device.type.id).then(data => {
        device.setDevices(data)
      })
    }, [device.type])

    const dropFilter = () => {
      device.setType({})
    }

    return (
        <main>
          <Container className="mt-3">
            <Row>
              <Col sm={4}>
                <div className="position-fixed">
                  <span>Укажите тип стекла:</span>
                  <DropdownButton className="mb-3" id="dropdown-basic-button"  title={device.type.name}>
                    {device.types.map(type =>
                      <Dropdown.Item  key={type.id} onClick={() => device.setType(type)} >{type.name}</Dropdown.Item>  
                    )}
                  </DropdownButton>
                  <DropdownButton className="mb-3" id="dropdown-basic-button" title="Ширина, мм ">
                    {device.width.map(width => 
                      <Dropdown.Item  key={width.id}>{width.width}</Dropdown.Item>  
                    )}
                  </DropdownButton>
                  <DropdownButton className="mb-3" id="dropdown-basic-button" title="Высота, мм ">
                  {/* {device.sizes.map(height => 
                      <Dropdown.Item  key={height.id}>{height.height}</Dropdown.Item>  
                    )} */}
                  </DropdownButton>
                  <button type="button" class="btn btn-danger" onClick={dropFilter}>Сбросить фильтры</button>
                </div>
              </Col>
              <Col sm={8}>
                <div className="d-flex justify-content-center mb-3">
                  <Button className="mx-3">Товары</Button>
                  <Button className="mx-3">Услуги</Button>
                </div>
                <div className="d-flex justify-content-center flex-wrap">
                {device.devices.map(device =>
                  <Card className="m-3" key={device.id}  style={{ width: '13rem' }}>
                      <Card.Img variant="top" src="https://via.placeholder.com/100" />
                      <Card.Body>
                        <h5>{device.name}</h5>
                        <Card.Text>Цена: {device.price}&#8381;</Card.Text>
                        <Button variant="primary" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id) } >Подробнее</Button>
                      </Card.Body>  
                  </Card>
                  )}
                </div>
              </Col>
            </Row>
          </Container>


          <Chat active={chatActive} setActive={setChatActive} />
          <div onClick={() => setChatActive(true)} className="chat-ico btn-primary" >
            <img src={chat} />
          </div>


        </main>
    )
})

export default Main