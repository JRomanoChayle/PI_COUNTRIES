const { Country, Activity } = require('../db')

const getCountryById = async (id) => {

    const countryFilter = await Country.findAll({
      where: { id },
      include: {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: {
          attributes: []
        }
      }
    })
    return countryFilter
  }

  module.exports = {
    getCountryById
  }