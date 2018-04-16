const fs = require('fs');
const path = require('path');
const uuid = require('uuid/v1')
const blogPath = path.join(__dirname, '..', 'data', 'blogposts.json');

const readAll = () => {
  const blogJSON = fs.readFileSync(blogPath, 'utf8');
  const blogPosts = JSON.parse(blogJSON);
  return blogPosts;
}

const readSingle = (id) => {
  const blogJSON = fs.readFileSync(blogPath, 'utf8');
  const blogPosts = JSON.parse(blogJSON);
  const singlePost = blogPosts.filter( sp => sp.id === id);
  const blogPost = singlePost[0];
  return blogPost;
}

const create = (request) => {
  const blogJSON = fs.readFileSync(blogPath, 'utf8');
  const blogPosts = JSON.parse(blogJSON);
  const newPost = {
    id: uuid(),
    title: request.title || 'untitled',
    content: request.content || 'N/A'
  }
  blogPosts.push(newPost);
  fs.writeFileSync(blogPath, JSON.stringify(blogPosts));
  return newPost;
}

const update = (id, updates) => {
  let result;
  const blogJSON = fs.readFileSync(blogPath, 'utf8');
  const blogPosts = JSON.parse(blogJSON);
  const updatedBlogPosts = blogPosts.map( blogPost => {
    if (blogPost.id === id) {
      result = {...blogPost, ...updates};
      return result;
    } else {
      return blogPost;
    }
  });
  fs.writeFileSync(blogPath, JSON.stringify(updatedBlogPosts));
  return result;
}

const destroy = (id) => {
  let result;
  const blogJSON = fs.readFileSync(blogPath, 'utf8');
  const blogPosts = JSON.parse(blogJSON);
  const remainingBlog = blogPosts.filter(blogPost => {
    if (blogPost.id === id){
      result = blogPost;
    }
    return blogPost.id !== id;
  })
  fs.writeFileSync(blogPath, JSON.stringify(remainingBlog));
  return remainingBlog;
}

module.exports = {
  readAll,
  readSingle,
  create,
  update,
  destroy
}
