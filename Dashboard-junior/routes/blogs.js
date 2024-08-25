const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.controller');
const authMiddleware = require('../middleware/auth');

// Get all blogs
router.get('/', blogController.getBlogView);
router.get('/editor', blogController.getCreateBlogView);
// router.get('/editor/:id', blogController.getEditBlogView);

// Get a specific blog
router.post('/all', authMiddleware, blogController.getAllBlogsByUser);

router.post('/init', blogController.initBlog);

// Create a new blog
router.post('/', blogController.createBlog);

// Update a blog
router.put('/:id', blogController.updateBlog);

// Delete a blog
router.delete('/:id', blogController.deleteBlog);

module.exports = router;
