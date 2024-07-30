import express from 'express';

import postController from '../controllers/post';

const router = express.Router();

// Get all posts
router.get('/', postController.getPosts);

router.get('/category/:category', postController.getPostsByCategory);

// Get post by id
router.get('/:id', postController.getPostById);

// Create post
router.post('/', postController.createPost);

// Update post
router.patch('/:id', postController.updatePost);

// Delete post
router.delete('/:id', postController.deletePost);

export default router;
