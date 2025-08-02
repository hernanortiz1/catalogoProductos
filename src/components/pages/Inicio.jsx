import { Container, Row, Form } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useState } from "react";

const Inicio = ({ productos }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  const handleInputChange = (e) => {
    setTerminoBusqueda(e.target.value);
    // guarda en el estado lo que se escribe
  };

  const productosFiltrados = productos.filter((producto) =>
    producto.nombreProducto
      .toLowerCase()
      .includes(terminoBusqueda.toLowerCase())
  );
  // filtra el array de productos, agarra un producto por vez, y se fija que el termino en minuscula incluya lo que se escribio en el input
  // devuelve true e false

  return (
    <section className="mainSection">
      <img
        className="banner"
        src="https://images.pexels.com/photos/13591748/pexels-photo-13591748.jpeg"
        alt="fondo cafe"
      />
      <Container className="mt-5">
        <h1 className="display-4">Nuestros Productos</h1>
        <hr />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Buscar producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa nombre del producto"
              onChange={handleInputChange}
              value={terminoBusqueda}
            />
          </Form.Group>
        </Form>
        <Row>
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((producto) => (
              <CardProducto
                key={producto.id}
                producto={producto}
              ></CardProducto>
            ))
          ) : (
            <p className="text-center my-5">
              No se encontraron productos para mostrar
            </p>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
