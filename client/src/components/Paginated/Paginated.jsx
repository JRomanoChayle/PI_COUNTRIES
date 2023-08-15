import style from './Paginated.module.css'

// Este componente Paginated muestra botones de paginación para dividir la lista de países en varias páginas.
// El número de páginas se calcula dividiendo el número total de países y la cantidad de países
// que se muestran por página. Al hacer clic en uno de los botones, se activa la función paginado(number),
// lo que permitirá a otro componente realizar la paginación y mostrar los países correspondientes a la seccion

const Paginated = ({ countryPerPage, countries, paginated }) => {
    const pageNumbers = [];
    // Este for se encarga de calcular la cantidad de casillas que habra en el paginado
    // controlando que por cada uno haya un maximo de 10 cards
    for (let i = 1; i <= Math.ceil(countries / countryPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <div className={style.paginatedContainer}>
                {
                    pageNumbers?.map(number => {
                        return (
                            <div className={style.numPage} key={number}>
                                <button className={style.active} onClick={() => paginated(number)}>{number}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Paginated;
