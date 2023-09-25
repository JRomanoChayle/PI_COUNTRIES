import style from './Card.module.css'
import { NavLink } from "react-router-dom";

//RENDERIZA LAS CARDS 

const Card = ({ id, name, image, continent, population, area }) => {
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
                    <h3 className={style.textCard}>Area: {area}</h3>
                </div>

            </div>
        </NavLink>
    )
}

export default Card;