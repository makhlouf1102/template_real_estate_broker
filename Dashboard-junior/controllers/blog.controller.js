const Blog = require('../models/blog');

exports.getAllBlogsByUser = async (req, res) => {
    try {
        const authorId = req.userId;
        const blogs = await Blog.getAllByUser(authorId);
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blogs', error: error.message });
    }
};

exports.getBlogView = async (req, res) => {
    res.render('dashboard/blogs/index', {layout: 'dashboard/side-bar-layout', path: '/dashboard/blogs'});
};

exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.getById(req.params.id);
        if (blog) {
            res.json(blog);
        } else {
            res.status(404).json({ message: 'Blog not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blog', error: error.message });
    }
};

exports.createBlog = async (req, res) => {
    try {
        const { title, content, isPublished } = req.body;
        const authorId = req.userId; // Assuming the middleware sets userId
        const blog = new Blog(null, title, content, authorId, null, null, isPublished);
        await blog.save();
        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({ message: 'Error creating blog', error: error.message });
    }
};

exports.updateBlog = async (req, res) => {
    try {
        const { title, content, isPublished } = req.body;
        const authorId = req.userId; // Assuming the middleware sets userId
        let blog = await Blog.getById(req.params.id);
        if (blog) {
            if (blog.authorId !== authorId) {
                return res.status(403).json({ message: 'Not authorized to update this blog' });
            }
            blog.title = title;
            blog.content = content;
            blog.isPublished = isPublished;
            await blog.save();
            res.json(blog);
        } else {
            res.status(404).json({ message: 'Blog not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating blog', error: error.message });
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.getById(req.params.id);
        if (blog) {
            if (blog.authorId !== req.userId) {
                return res.status(403).json({ message: 'Not authorized to delete this blog' });
            }
            await Blog.delete(req.params.id);
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Blog not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting blog', error: error.message });
    }
};

exports.getCreateBlogView = async (req, res) => {
    res.render('dashboard/blogs/create', {layout: 'dashboard/side-bar-layout', path: '/dashboard/blogs/create'});
};