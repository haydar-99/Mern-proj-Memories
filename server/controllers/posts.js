import { json } from "body-parser";
import postMessage from "../models/postMessage.js";







export const getPosts =  async (req ,res) =>{
    
  try {
      const postMessages= await postMessage.find();
      console.log(postMessages);
      
      res.status(404).json(postMessages);
      
  } catch (error) {
      res.status(404).json({message: error.message});
    
      
  }
    
}

export const createPost = async (req,res) => {
    const body = req.body;
    const newPost = new postMessage(body);
    try {
        await newPost.save();
        res.status(201).json(newPost);


       
   } catch (error) {
       res.status(409)-json({message: error.message});
       
       
   }
}