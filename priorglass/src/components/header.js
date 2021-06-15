import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/Formcontrol'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router'
import { ADMIN_ROUTE } from '../routes/consts'

const Header = () => {
  
  const history = useHistory()

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
        <Button className="ml-3" onclick={() => history.push(ADMIN_ROUTE)}>Панель Админа</Button>
      </Navbar>
    </header>
  );
}

export default Header;