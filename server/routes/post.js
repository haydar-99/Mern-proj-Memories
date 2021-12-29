import express from 'express';
import { getPosts } from '../controllers/posts.js'; //createPost method later
const router = express.Router();

router.get('/', getPosts);
// router.get('/', createPost);

export default router;