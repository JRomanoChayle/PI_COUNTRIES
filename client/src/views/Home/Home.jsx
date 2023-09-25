import Cards from '../../components/Cards/Cards'
import NavBar from '../../components/NavBar/NavBar';
import Filter from '../../components/Filter/Filter'
import Paginated from '../../components/Paginated/Paginated'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getCountries, onSearch, orderByName, orderByPopulation,filterCountryByContinent, orderByArea } from "../../redux/action";
import { useLocation } from 'react-router-dom';
import style from './home.module.css';

const Home = () => {
    const dispatch = useDispatch();

    const countries = useSelector(state => state.countries)

    //ESTADO LOCAL ORDENAMIENTO
    const [orden, setOrden] = useState('');

    //ESTADO LOCAL PAGINADO 
    const [currentPage, setCurrentPage] = useState(1);
    
    //CANTIDAD DE PAISES A RENDERIZAR POR PAGINA
    const [countryPerPage, setCountryPerPage] = useState(10) // El numero de paginas a mostrar

    //PRIMER Y ULTIMO ELEMENTO A RENDERIZAR (PAGINADO)
    const indexOfLastCountry = currentPage * countryPerPage
    const indexOfFirstCountry = indexOfLastCountry - countryPerPage

    //Paises a renderizar calculando primer y ultimo elemento del paginado
    const currentCountry = countries.slice(indexOfFirstCountry, indexOfLastCountry)

    //FUNCION CONTROLADORA PAGINADO
    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    //MANEJADOR DE CLICKS
    const handleClick = (event) => {
        event.preventDefault();
        dispatch(getCountries())
        setCurrentPage(1);
    }

    //HANDLER FILTRO POR CONTINENTE
    const handleFilterContinent = (event) => {
        event.preventDefault();
        dispatch(filterCountryByContinent(event.target.value))
        setCurrentPage(1);
    }

    //HANDLER ORDENAMIENTO POR NOMBRE
    const handlerOrderByName = (event) => {
        event.preventDefault();
        dispatch(orderByName(event.target.value))
        setCurrentPage(1);
        setOrden(`Ordered  ${event.target.value}`)
    }

    //HANDLER ORDENAMIENTO POR POBLACION
    const handlerByPopulation = (event) => {
        event.preventDefault();
        dispatch(orderByPopulation(event.target.value))
        setCurrentPage(1);
        setOrden(`Ordered  ${event.target.value}`)
    }
    const location = useLocation();

    //HOME -> RENDERIZA NAVBAR - FILTROS - CARDS -PAGINADO
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
                handlerByPopulation={handlerByPopulation}/>
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