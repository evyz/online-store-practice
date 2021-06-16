import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import AddDevice from '../components/modal/admin/addDevice'

const Admin = () => {

  const [activeDevice, setActiveDevice] = useState(false)

  return (
      <div>
        <h1 className="mt-3 d-flex justify-content-center">Панель Админа</h1>
        <div className="d-flex justify-content-center my-3">
          <Button className="mx-3" onClick={() => setActiveDevice(true)} >Добавить товар</Button>
          <Button className="mx-3">Добавить тип</Button>
        </div>

        <AddDevice active={activeDevice} setActive={setActiveDevice} />
      </div>
  );
}

export default Admin;