import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCountry, cleanDetail } from "../../redux/action";
import style from './detail.module.css';

// El componente Detail muestra los detalles de un país específico, incluyendo su información general y las
// actividades turísticas asociadas a él. Utiliza el estado global de Redux para acceder a la información del país
// mediante el hook useSelector y envía acciones a la store mediante el hook useDispatch. 
// Además, utiliza useEffect para cargar los detalles del país cuando el componente se monta y limpiar los recursos
// cuando el componente se desmonta.

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const country = useSelector(state => state.countryDetail);
    useEffect(() => {
        dispatch(getCountry(id)) // al montarse se encarga de trae el pais indicado por id
        return () => {
            dispatch(cleanDetail()) // cuando se desmonta, limpia el estado countryDetail
        }
    }, [])


    return (
        <div className={style.detailContain}>
            <div className={style.detailSubContain}>
                <div className={style.detailInfo}>
                    <div className={style.detailCountry}>
                        <img className={style.detailCountryImg} src={country[0]?.image} alt="flag" />
                    </div>
                    {/* Informacion completa del pais junto con las actividades a las que estan relacionadas */}
                    <div className={style.detailContainText}> 
                        <h4 className={style.detailText}>ID: {country[0]?.id}</h4>
                        <h4 className={style.detailText}>Name: {country[0]?.name}</h4>
                        <h4 className={style.detailText}>Continent: {country[0]?.continent}</h4>
                        <h4 className={style.detailText}>Capital: {country[0]?.capital}</h4>
                        <h4 className={style.detailText}>Subregion: {country[0]?.subregion}</h4>
                        <h4 className={style.detailText}>Area: {country[0]?.area}</h4>
                        <h4 className={style.detailText}>Population: {country[0]?.population}</h4>
                    </div>
                </div>
                <div className={style.titleActivities}>Tourist activities</div>
                <div className={style.detailContainActivity}> 
                    {
                        (country[0]?.Activities.length > 0) ?
                            <> {country[0].Activities.map(e => (
                                <div className={style.detailCardActivity} key={Math.random(1,10)}>
                                    <p key={Math.random(1,10)}>{[`Activity: ${e.name}`, <br key={Math.random(1,10)} />,
                                    `Difficulty: ${e.difficulty}`, <br key={Math.random(1,10)} />,
                                    `Duration: ${e.duration} hs`, <br key={Math.random(1,10)}/>,
                                    `Season: ${e.season}`]}
                                    </p>
                                </div>
                            ))}
                            </> :
                            <h3>{`The country ${country[0]?.name} does not have associated activities`}</h3>
                    }
                </div>
                <div className={style.detailContainBtn}>
                    <NavLink to={'/home'}>
                        <button className={style.detailBtn}>Home</button>
                    </NavLink>
                </div>
            </div>
        </div>

    )
}
export default Detail;