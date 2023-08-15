const {Country, Activity} = require ('../db')

const postActivities = async (name, difficulty, duration, season, country) => {

    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    const pais = await Country.findAll({
      where: { name: country }
    })
     await newActivity.addCountries(pais)
  
    const activity = await Activity.findAll({
      include: {
        model: Country,
        attributes: ["name"],
        through: {
          attributes: []
        }
      }
    });
    return activity
  
  }

  module.exports = { postActivities }