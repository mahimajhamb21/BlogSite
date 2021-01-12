const Blog = require('../model/blog');

exports.getBlogs = (req, res, next) => {
  Blog.fetchAllBlog((blogs) => {
    res.render('blogs', {
      pageTitle: 'blogs',
      blogs: blogs,
      path: '/blog',
    });
  });
};

exports.getAddBlog = (req, res, next) => {
  res.render('add-blogs');
};

exports.postAddBlog = (req, res, next) => {
  const title = req.body.title;
  const category = req.body.category;
  const email = req.body.email;
  const author = req.body.author;
  const dateOfUpload = req.body.dateOfUpload;
  const description = req.body.description;

  const blog = new Blog(
    title,
    category,
    email,
    author,
    description,
    dateOfUpload,
    null
  );

  blog.save();
  res.redirect('/');
};

exports.getDeleteBlog = (req, res, next) => {
  const Id = req.params.blogId;
  Blog.deleteById(Id);
  res.redirect('/');
};

exports.getEditBlog = (req, res, next) => {
  const id = req.params.blogId;
  Blog.getBlogById(id, (result) => {
    res.render('edit-blog', {
      pageTitle: 'edit-blogs',
      blogs: result,
      path: '/edit-blog',
    });
  });
};

exports.postEditBlog = (req, res, next) => {
  const title = req.body.title;
  const category = req.body.category;
  const email = req.body.email;
  const author = req.body.author;
  const dateOfUpload = req.body.dateOfUpload;
  const description = req.body.description;
  const id = req.body.blogId;
  const updatedBlog = new Blog(
    title,
    category,
    email,
    author,
    description,
    dateOfUpload,
    id
  );

  updatedBlog.save();
  res.redirect('/');
};

exports.getRightShift = (req, res, next) => {
  const id = req.params.blogId;
  Blog.rightShift(id);
  res.redirect('/');
};

exports.getLeftShift = (req, res, next) => {
  const id = req.params.blogId;
  Blog.leftShift(id);
  res.redirect('/');
};
