import {
    GET_COUNTRIES, GET_COUNTRY_ID, SEARCH_COUNTRIES, CLEAN_DETAIL,
    FILTER_BY_CONTINENT, ORDER_BY_NAME, ORDER_BY_POPULATION, POST_ACTIVITY,
    FILTER_BY_ACTIVITY, GET_ACTIVITY} from "./action-type";

// Estado Inicial
const initialState = {
    countries: [], // RENDERIZA CARDS
    allCountries: [], // COPIA COUNTRIES
    countryDetail: [], // DETALLE COUNTRY
    activities: [], // RENDERIZA ACTIVITIES
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
            };
            
        case GET_ACTIVITY:
            return {
                ...state,
                activities: action.payload,
            }

        case POST_ACTIVITY:
            return {
                ...state,
                activities: action.payload
            }
            
        case FILTER_BY_ACTIVITY:
            const activityName = action.payload; //SELECCION DEL USUARIO EN FILTRO
            const filterAct = activityName === 'All' ? state.allCountries :
                state.allCountries.filter((country) =>
                    country.Activities?.some((activity) => activity.name === activityName)
                )
            return {
                ...state,
                countries: filterAct,
            }
        case GET_COUNTRY_ID:
            return {
                ...state,
                countryDetail: action.payload
            };
        case CLEAN_DETAIL:
            return {
                ...state,
                countryDetail: []
            };

        case SEARCH_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            };

        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries 
            const continentFiltered = action.payload === 'All' ? allCountries :
            allCountries.filter(elemento => elemento.continent === action.payload)
            return {
                ...state,
                countries: continentFiltered
            }

        case ORDER_BY_NAME:
            let sortArr = [];
            if (action.payload === 'asc') {
                sortArr = state.countries.sort(function (a, b) {
                    if (a.name > b.name) return 1;
                    if (b.name > a.name) return -1;
                    return 0
                })
            } else if (action.payload === 'des') {
                sortArr = state.countries.sort(function (a, b) {
                    if (a.name > b.name) return -1;
                    if (b.name > a.name) return 1;
                    return 0
                })
            }else{
                sortArr = state.allCountries;
            }
            return {
                    ...state,
                    countries: sortArr
                }

        case ORDER_BY_POPULATION:
            let population = []
            if (action.payload === 'Menor') {
                population = state.countries.sort(function (a, b) {
                    return a.population - b.population;
                })
            } else if (action.payload === 'Mayor') {
                population = state.countries.sort(function (a, b) {
                    return b.population - a.population
                })
            } else {
                population = state.allCountries
            }

            return {
                ...state,
                countries: population,
            }

        default:
            return { ...state };
        
    }

}

export default rootReducer;