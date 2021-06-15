import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Card from 'react-bootstrap/Card'
import { observer } from 'mobx-react-lite'
import { Context } from '..'

const Main = observer(() => {
    const {device} = useContext(Context)

    return (
        <main>
          <Container>
            <Row>
              <Col sm={4}>
                <div className="mr2-0 pos-fix">
                  <DropdownButton id="dropdown-basic-button" title="Вид стекла ">
                    {device.types.map(type =>
                      <Dropdown.Item href="#/" key={type.id}>{type.name}</Dropdown.Item>  
                    )}
                  </DropdownButton>
                  <DropdownButton id="dropdown-basic-button" title="Ширина, мм ">
                    {device.sizes.map(width => 
                      <Dropdown.Item href="#/120" key={width.id}>{width.width}</Dropdown.Item>  
                    )}
                  </DropdownButton>
                  <DropdownButton id="dropdown-basic-button" title="Высота, мм ">
                  {device.sizes.map(height => 
                      <Dropdown.Item href="#/120" key={height.id}>{height.height}</Dropdown.Item>  
                    )}
                  </DropdownButton>
                </div>
              </Col>
              <Col sm={8}>
                <div className="d-flex justify-content-center mr0-0-2-0">
                  <Button className="mr0-2 height-fit-content">Товары</Button>
                  <Button className="mr0-2 height-fit-content">Услуги</Button>
                </div>
                <div className="products">
                {device.devices.map(device =>
                  <Card key={device.id}  style={{ width: '13rem' }}>
                      <Card.Img variant="top" src="https://via.placeholder.com/100" />
                      <Card.Body>
                        <h5>{device.name}</h5>
                        <Card.Text>Цена: {device.price}&#8381;</Card.Text>
                        <Button variant="primary">Подробнее</Button>
                      </Card.Body>  
                  </Card>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </main>
    )
})

export default Main