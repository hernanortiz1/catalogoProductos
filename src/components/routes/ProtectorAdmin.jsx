import { Navigate, Outlet } from "react-router";

const ProtectorAdmin = ({isAdmin}) => {
    //no es admin 
    if(!isAdmin){
        return <Navigate to={"/"}></Navigate>
    }

    // si es admin muestra las rutas
    
    return (
        // se transforma en lo que necesita el admin
        <Outlet />
    );
};

export default ProtectorAdmin;