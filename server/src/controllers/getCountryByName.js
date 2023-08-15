const { Country } = require('../db')
const { Op } = require('sequelize');

const getCountryByName = async (name) => {

    const countryFiltered = await Country.findAll({
      where:
      {
        name:
        {
          [Op.iLike]:
          `%${name}%`
        }
      }
    })
    return countryFiltered
}

module.exports = {
    getCountryByName
}