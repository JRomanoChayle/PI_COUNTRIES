import Cards from '../../components/Cards/Cards'
import NavBar from '../../components/NavBar/NavBar';
import Filter from '../../components/Filter/Filter'
import Paginated from '../../components/Paginated/Paginated'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getCountries, onSearch, orderByName, orderByPopulation,filterCountryByContinent } from "../../redux/action";
import { useLocation } from 'react-router-dom';
import style from './home.module.css';

const Home = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries)
    const [orden, setOrden] = useState('');
    const [currentPage, setCurrentPage] = useState(1); // Controla que el paginated siempre empiece por la pagina 1
    const [countryPerPage, setCountryPerPage] = useState(10) // El numero de paginas a mostrar

    // Estas constantes son para calcular los indices de las card que se deben mostrar
    const indexOfLastCountry = currentPage * countryPerPage
    const indexOfFirstCountry = indexOfLastCountry - countryPerPage
    const currentCountry = countries.slice(indexOfFirstCountry, indexOfLastCountry)

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(getCountries())
        setCurrentPage(1);
    }
    // Funcion encargada de despachar la accion de filtrar por 
    // continente cuando se selecciona una opcion de el listado
    const handleFilterContinent = (event) => {
        event.preventDefault();
        dispatch(filterCountryByContinent(event.target.value))
        setCurrentPage(1);
    }
    // Funcion encargada del filtro por orden alfabetico
    const handlerOrderByName = (event) => {
        event.preventDefault();
        dispatch(orderByName(event.target.value))
        setCurrentPage(1);
        setOrden(`Ordered  ${event.target.value}`)
    }
    // Funcion encargada del filtro por orden de poblacion
    const handlerByPopulation = (event) => {
        event.preventDefault();
        dispatch(orderByPopulation(event.target.value))
        setCurrentPage(1);
        setOrden(`Ordered  ${event.target.value}`)
    }



    const location = useLocation();

    // El componente home se encarga de renderizar los componentes:
    // NavBar - FiltroOrdenamiento - Paginado - Cards
    return (
        <div className={style.homeContain}>
            <div>
                {location.pathname == '/home' && <NavBar onSearch={onSearch} />}
            </div>
            <div>
                <Filter 
                handleClick={handleClick}
                handleFilterContinent={handleFilterContinent}
                handlerOrderByName={handlerOrderByName} 
                handlerByPopulation={handlerByPopulation} />
            </div>
            <div>
                <Cards currentCountry={currentCountry} />
            </div>
            <div>
                <Paginated countryPerPage={countryPerPage} countries={countries.length} paginated={paginated} />
            </div>
        </div>
    )
}
export default Home;