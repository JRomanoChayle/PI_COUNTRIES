import style from './NavBar.module.css';
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

// Este componente NavBar representa una barra de navegación, un botón para crear
// actividades y una barra de búsqueda con su boton de acción. El botón "Crear Actividad" redirige a la página de
// actividades cuando se hace clic en él gracias al NavLink, y la barra de búsqueda permite a los usuarios buscar
// un pais ó muchos dependiendo de la coincidencia.

const NavBar = ({ onSearch }) => {
    return (
        <div className={style.navContainer}>
            <div>
                <SearchBar onSearch={onSearch} />
            </div>
            <div className={style.buttonNav}>
                
                <NavLink to='/activity'>
                    <button className={style.btnNav}>Create Activity</button>
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar;