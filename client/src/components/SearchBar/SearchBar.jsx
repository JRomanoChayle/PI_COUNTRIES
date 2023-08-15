import {useState} from 'react';
import style from './SearchBar.module.css'
import { useDispatch } from 'react-redux';

// Este componente SearchBar proporciona una barra de búsqueda donde los usuarios pueden ingresar el nombre de un
// país y buscarlo. Al hacer clic en el botón "Buscar", se activa la función onSearch(name),
// donde name es la coincidencia de búsqueda introducido por el usuario.

const SearchBar = ({onSearch}) => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleClick = () =>{
        dispatch(onSearch(name))
    }

    return(
        <div className={style.searchContain}>
            <input className={style.searchInput} type="search" placeholder='Enter a country' onChange={handleChange} value={name}/>
            <button className={style.searchBtn} onClick={() =>{handleClick();setName('')}}>Search</button>
        </div>
    )
}

export default SearchBar;