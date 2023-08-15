const axios = require("axios");
const server = require("./src/server");
const { conn, Activity, Country } = require('./src/db.js');
const {sequelize} = require('sequelize');
const URL = 'http://localhost:5000/countries';
const PORT = 3001;

const loadDB = async () => {
  try {
    const response = await axios.get(URL);
    const countriesData = response.data;

    if(!countriesData) throw new Error('The country list is empty');
    let countriesArr = [];

    const promises = countriesData.map(async (country) => {
      const newCountries = {
        id: country.cca3,
          name: country.name.common,
          image: country.flags.png,
          continent: country.continents,
          capital: country.capital || 'Capital not found',
          subregion: country.subregion || 'Subregion not found',
          area: country.area,
          population: country.population,
      }
      return newCountries;
    });
  
    countriesArr = await Promise.all(promises);

    await Country.bulkCreate(countriesArr);
    console.log(`${countriesData.length} countries has been inserted`)
  } catch (error) {
    console.log(error)
  }
}

conn
.sync({ force: true })
.then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    loadDB();
  });
})
.catch(error => console.error(error))
