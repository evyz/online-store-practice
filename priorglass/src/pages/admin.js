import Button from 'react-bootstrap/Button'

function Admin() {
  return (
    <div>
      <main>
        <div className="d-flex justify-content-center my-3">
          <Button className="mx-3">Добавить товар</Button>
          <Button className="mx-3">Добавить тип</Button>
        </div>
      </main>
    </div>
  );
}

export default Admin;