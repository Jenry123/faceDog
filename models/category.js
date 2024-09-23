module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {

      idCategory:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
      },  
      nameRaza: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Category;
  };
  