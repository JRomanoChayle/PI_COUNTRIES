import style from './Cards.module.css';
import Card from "../Card/Card";

const Cards = ({currentCountry}) => {

   // Este componente Cards recibe una lista de países a través del prop currentCountry, y luego crea un conjunto de
   // tarjetas (Card) para cada país, mostrando información como la imagen, el nombre, el continente y la población 
   // de cada país.
   return (
      <div className={style.cardsContainer}>
         {
            currentCountry?.map(country => {
               return (
                  <Card
                     key={Math.random(1,10)}
                     id={country.id}
                     image={country.image}
                     name={country.name}
                     continent={country.continent}
                     population={country.population}
                  />
               )
            })
         }
      </div>
   )
}

export default Cards;