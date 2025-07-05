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
import { useState } from "react";

function App() {
  const usuarioLogueado =
    JSON.parse(sessionStorage.getItem("userKey")) || false;
  // no es necesario JSON en booleanos
  const [usuario, setUsuarioAdmin] = useState(usuarioLogueado);

  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <main>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
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
              element={<Administrador></Administrador>}
            ></Route>
            <Route
              path="/administrador/crear"
              element={<FormularioProducto></FormularioProducto>}
            ></Route>
            <Route
              path="/administrador/editar"
              element={<FormularioProducto></FormularioProducto>}
            ></Route>
            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
