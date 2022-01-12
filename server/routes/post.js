import express from 'express';
import { getPosts, createPost, updatePost } from '../controllers/posts.js'; //createPost method later


const router = express.Router();

router.
get('/', getPosts).
post('/', createPost).
patch('/:id', updatePost)



// router.post('/', createPost);


export default router;