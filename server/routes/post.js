import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js'; //createPost method later


const router = express.Router();

router.
get('/', getPosts).
post('/', createPost).
patch('/:id', updatePost).
delete('/:id', deletePost);



// router.post('/', createPost);


export default router;