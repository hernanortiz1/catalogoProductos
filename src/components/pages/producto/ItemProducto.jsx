import { Button } from "react-bootstrap";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ItemProducto = ({ producto, fila, borrarProducto }) => {
  const eliminarProducto = () => {
    Swal.fire({
      title: "Eliminar producto",
      text: "no puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#146c43",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        if (borrarProducto(producto.id)) {
          Swal.fire({
            title: "Producto eliminado",
            text: `el producto ${producto.nombreProducto} fue eliminado`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "ocurrio un error",
            text: `el producto ${producto.nombreProducto} NO fue eliminado`,
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <tr>
      <td className="text-center">{fila}</td>
      <td>{producto.nombreProducto}</td>
      <td className="text-end">{producto.precio}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          className="img-thumbnail"
          alt={producto.nombreProducto}
        ></img>
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Link
          className="me-lg-2 btn btn-warning"
          to={"/administrador/editar/" + producto.id}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={eliminarProducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
