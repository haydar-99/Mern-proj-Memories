import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js'; //createPost method later


const router = express.Router();

router.
get('/', getPosts).
post('/', createPost);



// router.post('/', createPost);


export default router;