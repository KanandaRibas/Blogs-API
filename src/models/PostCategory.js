module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {},
    {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
    },
  )

PostCategory.associate = (models) => {
  models.Category.belongsToMany(models.BlogPost, {
    as: 'categories',
    through: PostCategory,
    foreignKey: 'blogPostId',
    otherKey: 'categoryId',
  });
  models.BlogPost.belongsToMany(models.Category, {
    as: 'blog_posts',
    through: PostCategory,
    foreignKey: 'categoryId',
    otherKey: 'blogPostId',
  });
};

return PostCategory;
};