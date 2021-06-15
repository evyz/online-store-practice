import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/Formcontrol'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
  return (
    <header>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">ПриорГласс</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#about">О Компании</Nav.Link>
          <Nav.Link href="#other">Другое</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Поиск" className="mr-sm-2" />
          <Button variant="outline-primary">Поиск</Button>
        </Form>
        <Navbar.Text><a href="./admin">Панель Админа</a></Navbar.Text>
      </Navbar>
    </header>
  );
}

export default Header;