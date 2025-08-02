import { Col, Card } from "react-bootstrap";
import { Link } from "react-router";
const CardProducto = ({ producto }) => {
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card className="h-100">
        <div>
          <img
            src={producto.imagen}
            alt={producto.nombreProducto}
            className="card-img-top-nueva"
          />
        </div>
        <Card.Body>
          <Card.Title className="primary-font">
            {producto.nombreProducto}
          </Card.Title>
          <Card.Text>
            Descripción: {producto.descripcion_breve}
            fuerte. <br className="mb-2" />
            <span className="fw-bold">Precio: ${producto.precio}</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
          <Link variant="success" className="me-2 btn btn-success" to={"/detalle/"+producto.id}>
          {/* concateno el link con el id de producto */}
            Ver más
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};
export default CardProducto;
