const { Activity} = require ('../db')

const deleteActivities = async (id) => await Activity.destroy({ where: { id } })

module.exports = {
    deleteActivities
}