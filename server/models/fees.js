module.exports = (sequelize, DataTypes) => {
  const Fee = sequelize.define('fee', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    price: { type: DataTypes.DECIMAL },
  });

  // see documentation here: http://docs.sequelizejs.com/manual/tutorial/upgrade-to-v4.html
  // class methods
  Fee.associate = (models) => {
    Fee.belongsTo(models.Time);
    Fee.belongsTo(models.Post);
  }

  // instance methods
  Fee.prototype.getName = () => {
    console.log(this.name);
  }

  return Fee;
}
