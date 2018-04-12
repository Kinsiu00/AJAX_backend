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

const create = (blogPost) => {
  const blogJSON = fs.readFileSync(blogPath, 'utf8');
  const blogPosts = JSON.parse(blogJSON);
  blogPost.id = uuid();
  blogPost.title = "";
  blogPost.content = "";
  blogPosts.push(blogPost);
  fs.writeFileSync(blogPath, JSON.stringify(blogPosts));
  return blogPost;
}

const update = (id, updates) => {
  let result;
  const blogJSON = fs.readFileSync(blogPath, 'utf8');
  const blogPosts = JSON.parse(blogJSON);
  const updatedBlogPosts = blogPosts.map(blogPost => {
    if (blogPost.id === id){
      result = {...blogPost, ...updates};
      return result;
    } else {
      return artist;
    }
  });
  fs.writeFileSync(artistPath, JSON.parse(updatedBlogPosts));
}

const destroy = (id) => {
  let result;
  const blogJSON = fs.readFileSync(blogPath, 'utf8');
  const blogPosts = JSON.parse(blogJSON);
  const remainingBlog = blogPosts.filter(blogPost => {
    if (blogPost.id === id){
      result = blogPost;
    }
    return artist.id !== id;
  })
  fs.writeFileSync(blogPath, JSON.parse(remainingBlog));
  return result;
}

module.exports = {
  readAll,
  readSingle,
  create,
  update,
  destroy
}
