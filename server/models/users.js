module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    //   allowNull: false
    // },
    email:      { type: DataTypes.STRING },
    firstname:  { type: DataTypes.STRING },
    lastname:   { type: DataTypes.STRING },
    username:   { type: DataTypes.STRING },
    rating:     { type: DataTypes.DECIMAL },
    lat:        { type: DataTypes.DECIMAL },
    lon:        { type: DataTypes.DECIMAL }
  });

  // create associates here
  User.associate = (models) => {
    User.hasMany(models.Post);
  }

  // see documentation here: http://docs.sequelizejs.com/manual/tutorial/upgrade-to-v4.html
  // class methods
  User.someClassMethods = () => {
  }

  // instance methods
  User.prototype.getName = () => {
    console.log(this.getName);
  }

  return User;
}
