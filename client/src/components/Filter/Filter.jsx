import { useDispatch, useSelector } from "react-redux";
import { filterByActivity } from "../../redux/action";
import style from './Filter.module.css';

//RENDERIZAR FILTROS Y ORDENAMIENTOS

const Filter = ({handlerOrderByName, handlerByPopulation, handleClick, handleFilterContinent, handlerByArea}) => {
    const dispatch = useDispatch();
    //GUARDAR ACTIVIDADES DE ESTADO GLOBAL
    const activities = useSelector(state => state.activities);  
    
    //FILTRO ACTIVIDAD
    const handleActivity = (event) => {
        event.preventDefault();
        dispatch(filterByActivity(event.target.value))
    }
    //Extrae solo los nombres de las actividades de la lista activities.
    let values = activities.map(element => element.name)
    //CONTROL DE DUPLICADOS
    const onlyValues = [...new Set(values)]


    return (
        <div className={style.filterContain}>
                <button className={style.filterBtn} onClick={element => {handleClick(element)}}>All Countries</button>
                <select className={style.filterSelect} onChange={handlerOrderByName}>
                    <option>Name</option>
                    <option value='asc'>A - Z</option>
                    <option value='des'>Z - A</option>
                </select>
                <select className={style.filterSelect} onChange={(element) => {handleFilterContinent(element)}}>
                    <option value='All'>Continents</option>
                    <option value='{Asia}'>Asia</option>
                    <option value='{"North America"}'>North America</option>
                    <option value='{"South America"}'>South America</option>
                    <option value='{Africa}'>Africa</option>
                    <option value='{Antarctica}'>Antarctica</option>
                    <option value='{Europe}'>Europe</option>
                    <option value='{Oceania}'>Oceania</option>
                </select>
                <select className={style.filterSelect} onChange={(element) => {handlerByPopulation(element)}}>
                    <option>Population</option>
                    <option value="Menor">Min</option>
                    <option value="Mayor">Max</option>
                </select>
                <select className={style.filterSelect} onChange={handleActivity}>
                    <option value='All'>Activities</option>
                    {
                        onlyValues?.map((element) => {
                            return <option key={element} value={element}>{element}</option>
                        })
                    }
                </select>
        </div>
    )
}

export default Filter;