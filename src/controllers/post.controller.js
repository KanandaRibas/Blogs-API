const postServices = require('../services/post.service');

const getPosts = async (_req, res) => {
  const posts = await postServices.findAllPosts();

  return res.status(200).json(posts);
  };

  module.exports = { getPosts };
