const { DataTypes } = require('sequelize');
// Exportamos una función que define el modelo
// Luego le inyectamos la conexión a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    difficulty:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5 
        },
    },
    duration: {
        type: DataTypes.INTEGER,
    },
    season:{
        type: DataTypes.ENUM("Verano","Otoño","Invierno","Primavera"),
        allowNull: false,
    }
  },{timestamps: false});
};