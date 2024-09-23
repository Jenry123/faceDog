module.exports = (sequelize, DataTypes) => {
    const Perfil = sequelize.define('Perfil', {

      idPerfil:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
      },  
      nameOwner: {
        type: DataTypes.STRING,
        allowNull: false
      },
     telphoneNumber:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      idPet:{
        type:DataTypes.INTEGER,
        allowNull:false
      }
    });
  
    return Perfil;
  };
  