module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title:  { type: DataTypes.STRING },
    body:   { type: DataTypes.STRING },
    status: { type: DataTypes.STRING },
    lat:    { type: DataTypes.DECIMAL },
    lon:    { type: DataTypes.DECIMAL }
  });

  // see documentation here: http://docs.sequelizejs.com/manual/tutorial/upgrade-to-v4.html
  // class methods
  Post.associate = (models) => {
    Post.belongsTo(models.User);
  }
  // instance methods
  Post.prototype.getTitle = () => {
    console.log(this.title);
  }

  return Post;
}
