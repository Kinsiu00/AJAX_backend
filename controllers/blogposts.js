const blogModel = require('../models/blogpost');

const readAll = (request, response) => {
  const blogposts = blogModel.readAll();
  response.send(blogposts);
}

const readSingle = (request, response) => {
  const blogpost = blogModel.readSingle(request.params.id);
  response.send(blogpost);
}

const create = (request, response) => {
  const blogpost = blogModel.create(request.body);
  response.send(blogpost);
}

const update = (request, response) => {
  const blogpost = blogModel.update(request.params.id, request.body);
  response.send(blogpost);
}

const destroy = (request, response) => {
  const blogpost = blogModel.destroy(request.params.id);
  response.send(blogpost);
}

module.exports = {
  readAll,
  readSingle,
  create,
  update,
  destroy
}
