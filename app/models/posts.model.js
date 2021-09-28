module.exports = (sequelize, Sequelize) => {
    const Posts = sequelize.define("posts", {
      title: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Posts;
  };