module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('review', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    rating:  { type: DataTypes.STRING },
    comment: { type: DataTypes.STRING }
  });

  // see documentation here: http://docs.sequelizejs.com/manual/tutorial/upgrade-to-v4.html
  // class methods
  Review.associate = (models) => {
    Review.belongsTo(models.Booking);
  }

  // instance methods
  Review.prototype.getName = () => {
    console.log(this.name);
  }

  return Review;
}
