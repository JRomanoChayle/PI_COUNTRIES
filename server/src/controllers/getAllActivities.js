const {Country, Activity} = require ('../db')

const getAllActivities = async () => await Activity.findAll({
    include: {
      model: Country,
      attributes: ["name"],
      through: {
        attributes: []
      }
    }
  });

module.exports = {
    getAllActivities
}