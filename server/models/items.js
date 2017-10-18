module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('item', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name:        { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    condition:   { type: DataTypes.STRING },
    deposit:     { type: DataTypes.DECIMAL }
  });

  // see documentation here: http://docs.sequelizejs.com/manual/tutorial/upgrade-to-v4.html
  // class methods
  Item.associate = (models) => {
    Item.belongsTo(models.User);
    Item.belongsTo(models.Post);
  }

  // instance methods
  Item.prototype.getName = () => {
    console.log(this.name);
  }

  return Item;
}
