import { GET_COUNTRIES, GET_COUNTRY_ID, SEARCH_COUNTRIES, CLEAN_DETAIL, 
    FILTER_BY_CONTINENT, ORDER_BY_NAME, ORDER_BY_POPULATION, 
    FILTER_BY_ACTIVITY, POST_ACTIVITY, GET_ACTIVITY } from "./action-type";
import axios from 'axios';


// Funcion encargada de traer todos los paises
export const getCountries = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/countries");
            if (data.length)
                return dispatch({ type: GET_COUNTRIES, payload: data });
        } catch (error) {
            alert("Error: " + error.response.data.error);
        }
    };
};
// Funcion encargada de traer un pais especificado por su id
export const getCountry = (id) => {
    return async function (dispatch) {
        try {
            const { data } = await axios.get(`http://localhost:3001/countries/${id}`);
            if (data.length)
                return dispatch({ type: GET_COUNTRY_ID, payload: data })
        } catch (error) {
            alert("Error: " + error.response.data.error);
        }
    }
}
// Funcion encargada de traer todas las actividades
export const getActivities = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/activities");
            if (data.length)
                return dispatch({ type: GET_ACTIVITY, payload: data });
        } catch (error) {
            alert("Error: " + error.response.data.error);
        }
    };
};
// Funcion encargada de enviar los datos para la creacion de una nueva actividad
export const postActivity = (payload) => {
    return async function(dispatch){
        try {
            const {data} = await axios.post("http://localhost:3001/activities", payload);
            return dispatch({ type: POST_ACTIVITY, payload: data})
        } catch (error) {
            alert("Error: " + error.response.data.error);
        }
    }
};
// Funcion encargada obtener manejar el nombre de la actividad a filtrar
export const filterByActivity = (payload) => {
    return {type: FILTER_BY_ACTIVITY, 
        payload
    }
}
// Funcion encargada de traer un pais especificado por su nombre
export const onSearch = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/countries?name=${name}`);
            if (data.length) {
                return dispatch({ type: SEARCH_COUNTRIES, payload: data });
            }
        } catch (error) {
            alert("Error: " + error.response.data.error);
        }
    };
};
// Funcion encargada de indicar el seteo del estado activities
export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL,
    };
};
// Funcion encargada de obtener el nombre del continente a filtrar
export const filterCountryByContinent = (payload) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload
    };
};
// Funcion encargada de obtener la opcion Ascendente o Descendente indicada para realizar el ordenamiento 
export const orderByName = (payload) => {
    return {type: ORDER_BY_NAME, 
        payload
    }
};
// Funcion encargada de obtener la opcion Mayor o Menor indicada para realizar el ordenamiento
export const orderByPopulation = (payload) => {
    return {type: ORDER_BY_POPULATION, 
        payload
    }
};
