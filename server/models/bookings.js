module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('booking', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    start_time:       { type: DataTypes.DATE },
    end_time:         { type: DataTypes.DATE },
    start_condition:  { type: DataTypes.STRING },
    end_condition:    { type: DataTypes.STRING },
    status:           { type: DataTypes.STRING }
  });

  // see documentation here: http://docs.sequelizejs.com/manual/tutorial/upgrade-to-v4.html
  // class methods
  Booking.associate = (models) => {
    Booking.belongsTo(models.Post);
  }

  // instance methods
  Booking.prototype.getName = () => {
    console.log(this.name);
  }

  return Booking;
}
