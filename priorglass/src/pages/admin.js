import Button from 'react-bootstrap/Button'

function Admin() {
  return (
      <main>
        <h1 className="mt-3 d-flex justify-content-center">Панель Админа</h1>
        <div className="d-flex justify-content-center my-3">
          <Button className="mx-3">Добавить товар</Button>
          <Button className="mx-3">Добавить тип</Button>
        </div>
      </main>
  );
}

export default Admin;