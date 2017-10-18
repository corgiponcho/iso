module.exports = (sequelize, DataTypes) => {
  const Media = sequelize.define('media', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    fileLink:    { type: DataTypes.STRING },
    fileName:    { type: DataTypes.STRING },
    fileCaption: { type: DataTypes.STRING },
    fileSize:    { type: DataTypes.DECIMAL }
  });

  // see documentation here: http://docs.sequelizejs.com/manual/tutorial/upgrade-to-v4.html
  // class methods
  Media.associate = (models) => {
    Media.belongsTo(models.Item);
  }

  // instance methods
  Media.prototype.getName = () => {
    console.log(this.name);
  }

  return Media;
}
