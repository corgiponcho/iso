module.exports = (sequelize, DataTypes) => {
  const Time = sequelize.define('time', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    unit: { type: DataTypes.STRING },
  });

  // see documentation here: http://docs.sequelizejs.com/manual/tutorial/upgrade-to-v4.html
  // class methods
  Time.associate = (models) => {
    Time.hasMany(models.Fee);
  }

  // instance methods
  Time.prototype.getName = () => {
    console.log(this.name);
  }

  return Time;
}
