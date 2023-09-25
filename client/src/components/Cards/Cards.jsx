import style from './Cards.module.css';
import Card from "../Card/Card";

const Cards = ({currentCountry}) => {

   // PASA POR PROPS LAS CARDS A RENDERIZAR A COMPONENTE CARD
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
                     area={country.area}
                  />
               )
            })
         }
      </div>
   )
}

export default Cards;