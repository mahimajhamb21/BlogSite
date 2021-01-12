const express = require('express');
const path = require('path');
const router = express.Router();

const blogController = require('../controller/blog');

router.get('/', blogController.getBlogs);
router.get('/add-blog', blogController.getAddBlog);
router.post('/add-blogs', blogController.postAddBlog);
router.get('/edit-blog/:blogId', blogController.getEditBlog);
router.post('/edit-blog', blogController.postEditBlog);
router.get('/delete-blog/:blogId', blogController.getDeleteBlog);
router.get('/left-shift/:blogId', blogController.getLeftShift);
router.get('/right-shift/:blogId', blogController.getRightShift);

module.exports = router;
