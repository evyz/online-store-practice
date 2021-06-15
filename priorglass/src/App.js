import './App.css';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <Row>
            <Col sm={4}>
              <div className="mr2-0 pos-fix">
                <DropdownButton id="dropdown-basic-button" title="Вид стекла ">
                  <Dropdown.Item href="#/">Прозрачное стекло</Dropdown.Item>
                  <Dropdown.Item href="#/">Осветленное стекло</Dropdown.Item>
                  <Dropdown.Item href="#/">Тонированное серое стекло</Dropdown.Item>
                  <Dropdown.Item href="#/">Тонированное бронзовое стекло</Dropdown.Item>
                  <Dropdown.Item href="#/">Матовое стекло</Dropdown.Item>
                  <Dropdown.Item href="#/">Зеркало</Dropdown.Item>
                  <Dropdown.Item href="#/">Зеркало осветленное</Dropdown.Item>
                  <Dropdown.Item href="#/">Стеклопакет однокамерный 4-16-4</Dropdown.Item>
                  <Dropdown.Item href="#/">Стеклопакет двухкамерный 4-10-4-10-4</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Ширина, мм ">
                  <Dropdown.Item href="#/120">120</Dropdown.Item>
                  <Dropdown.Item href="#/200">200</Dropdown.Item>
                  <Dropdown.Item href="#/500">500</Dropdown.Item>
                  <Dropdown.Item href="#/1000">1000</Dropdown.Item>
                  <Dropdown.Item href="#/1500">1500</Dropdown.Item>
                  <Dropdown.Item href="#/2000">2000</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Высота, мм ">
                  <Dropdown.Item href="#/120">120</Dropdown.Item>
                  <Dropdown.Item href="#/200">200</Dropdown.Item>
                  <Dropdown.Item href="#/500">500</Dropdown.Item>
                  <Dropdown.Item href="#/1000">1000</Dropdown.Item>
                  <Dropdown.Item href="#/1500">1500</Dropdown.Item>
                  <Dropdown.Item href="#/2000">2000</Dropdown.Item>
                </DropdownButton>
              </div>
            </Col>
            <Col sm={8}>
              <div className="d-flex justify-content-center mr0-0-2-0">
                <Button className="mr0-2 height-fit-content">Товары</Button>
                <Button className="mr0-2 height-fit-content">Услуги</Button>
              </div>
              <div className="products">
                <Card style={{ width: '13rem' }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/100" />
                  <Card.Body>
                    <Card.Text>Цена: 1000&#8381;</Card.Text>
                    <Button variant="primary">Подробнее</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '13rem' }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/100" />
                  <Card.Body>
                    <Card.Text>Цена: 1000&#8381;</Card.Text>
                    <Button variant="primary">Подробнее</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '13rem' }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/100" />
                  <Card.Body>
                    <Card.Text>Цена: 1000&#8381;</Card.Text>
                    <Button variant="primary">Подробнее</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '13rem' }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/100" />
                  <Card.Body>
                    <Card.Text>Цена: 1000&#8381;</Card.Text>
                    <Button variant="primary">Подробнее</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '13rem' }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/100" />
                  <Card.Body>
                    <Card.Text>Цена: 1000&#8381;</Card.Text>
                    <Button variant="primary">Подробнее</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '13rem' }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/100" />
                  <Card.Body>
                    <Card.Text>Цена: 1000&#8381;</Card.Text>
                    <Button variant="primary">Подробнее</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '13rem' }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/100" />
                  <Card.Body>
                    <Card.Text>Цена: 1000&#8381;</Card.Text>
                    <Button variant="primary">Подробнее</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;