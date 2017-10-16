module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define('post', {
    title: { type: Sequelize.STRING },
    status: { type: Sequelize.STRING },
    lat: { type: Sequelize.DECIMAL },
    lon: { type: Sequelize.DECIMAL }
  });

  // see documentation here: http://docs.sequelizejs.com/manual/tutorial/upgrade-to-v4.html
  // class methods
  Post.associate = (User) => {
    Post.belongsTo(User, {foreignKey: User.uuid, targetKey: 'name'});
  }

  // instance methods
  Post.prototype.getTitle = () => {
    console.log(this.title);
  }

  return Post;
}
