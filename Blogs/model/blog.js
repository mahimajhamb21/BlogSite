let alert = require('alert');

const blogs = [];
const { static } = require('express');
const rootDir = require('../util/path');

module.exports = class Blog {
  constructor(title, category, email, author, description, dateOfUpload, id) {
    (this.title = title),
      (this.category = category),
      (this.email = email),
      (this.author = author),
      (this.description = description),
      (this.dateOfUpload = dateOfUpload),
      (this.id = id);
  }

  save() {
    const index = blogs.findIndex((c) => c.id === this.id);
    if (index >= 0) {
      blogs[index] = this;
    } else {
      this.id = Math.random().toString();
      blogs.push(this);
    }
  }

  static fetchAllBlog(cb) {
    cb(blogs);
  }

  static deleteById(id) {
    const index = blogs.findIndex((c) => c.id === id);
    blogs.splice(index,1);
  }

  static getBlogById(id, cb) {
    const blog = blogs.findIndex((c) => c.id === id);
    cb(blogs[blog]);
  }

  static rightShift(id) {
    const index = blogs.findIndex((c) => c.id === id);
    let temp = blogs[index];
    let temp2 = blogs[index + 1];
    if (index >= 0 && index + 1 > 0 && blogs[index] && blogs[index + 1]) {
      blogs.splice(index, 1, temp2);
      blogs.splice(index + 1, 1, temp);
    } else {
      alert(`'Can't shift more`);
    }
  }

  static leftShift(id) {
    const index = blogs.findIndex((c) => c.id === id);
    let temp = blogs[index];
    let temp2 = blogs[index - 1];
    if (index > 0 && index - 1 >= 0 && blogs[index] && blogs[index - 1]) {
      blogs.splice(index, 1, temp2);
      blogs.splice(index - 1, 1, temp);
    } else {
      alert(`'Can't shift more`);
    }
  }
};
