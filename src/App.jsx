import { BrowserRouter, Routes, Route } from "react-router";
import Administrador from "./components/pages/Administrador";
import DetalleProducto from "./components/pages/DetalleProducto";
import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";
import Login from "./components/pages/Login";
import CardProducto from "./components/pages/producto/CardProducto";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import Footer from "./components/shared/Footer";
import Menu from "./components/shared/Menu";
import { useEffect, useState } from "react";
import ProtectorAdmin from "./components/routes/ProtectorAdmin";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const usuarioLogueado =
    JSON.parse(sessionStorage.getItem("userKey")) || false;
  // no es necesario JSON en booleanos
  const productosLocalStorage =
    JSON.parse(localStorage.getItem("catalogoProductos")) || [];
  const [usuarioAdmin, setUsuarioAdmin] = useState(usuarioLogueado);
  const [productos, setProductos] = useState(productosLocalStorage);

const crearProducto = (productoNuevo) =>{
  //agregar id 
  productoNuevo.id = uuidv4();
  //agregar prod al state de prod 
  setProductos([...productos, productoNuevo])
  return true;
}

const borrarProducto = (idProducto) =>{
  const productosFiltrados = productos.filter((itemProducto)=> itemProducto.id !== idProducto)
  setProductos(productosFiltrados)
  return true;
}

  useEffect(() => {
    localStorage.setItem("catalogoProductos", JSON.stringify(productos));
  }, [productos]);
  // se ejecuta en montaje
  return (
    <>
      <BrowserRouter>
        <Menu
          usuarioAdmin={usuarioAdmin}
          setUsuarioAdmin={setUsuarioAdmin}
        ></Menu>
        <main>
          <Routes>
            <Route path="/" element={<Inicio productos={productos} />}></Route>
            <Route
              path="/detalle"
              element={<DetalleProducto></DetalleProducto>}
            ></Route>
            <Route
              path="/login"
              element={<Login setUsuarioAdmin={setUsuarioAdmin}></Login>}
            ></Route>
            <Route
              path="/administrador"
              element={<ProtectorAdmin isAdmin={usuarioAdmin}></ProtectorAdmin>}
            >
              {/* componente que renderiza cuando va a ruta administrador */}
              <Route
                index
                element={
                  <Administrador
                    setProductos={setProductos}
                    productos={productos}
                    borrarProducto={borrarProducto}
                  ></Administrador>
                }
              ></Route>

              <Route
                path="crear"
                element={<FormularioProducto crearProducto={crearProducto}></FormularioProducto>}
              ></Route>
              <Route
                path="editar"
                element={<FormularioProducto></FormularioProducto>}
              ></Route>
            </Route>

            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
