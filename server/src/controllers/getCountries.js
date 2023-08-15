const {Country, Activity } = require ('../db')

const getCountries = async () => {
    
    const findAllCountries = async () => await Country.findAll({
      include: [{
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: { attributes: [] },
    }]
  })
    return await findAllCountries()
  }


module.exports = {
getCountries
}