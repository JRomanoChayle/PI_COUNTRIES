import style from './Card.module.css'
import { NavLink } from "react-router-dom";

// Este componente Card muestra una tarjeta que contiene información básica de un país, como su nombre, continente,
// población y una imagen de su bandera. Además, la tarjeta se convierte en un enlace que redirige a una página de
// detalles específica del país cuando se hace clic en ella, gracias al uso de NavLink y el ID del país

const Card = ({ id, name, image, continent, population }) => {
    return (
        <NavLink to={`/detail/${id}`} className={style.navLinkCard}>
            <div className={style.cardContainer}>
                <div>
                    <img className={style.bandera} src={image} alt="imgFlag" />
                </div>
                <div>
                    <h3 className={style.textCard}>Name: {name}</h3>
                    <h3 className={style.textCard}>Continent: {continent}</h3>
                    <h3 className={style.textCard}>Population: {population}</h3>
                </div>

            </div>
        </NavLink>
    )
}

export default Card;