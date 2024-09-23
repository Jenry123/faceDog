module.exports = (sequelize, DataTypes) => {
    const Sex = sequelize.define('Sex', {
    
      idSex:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
        
      },

      nameSex: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Sex;
  };
  