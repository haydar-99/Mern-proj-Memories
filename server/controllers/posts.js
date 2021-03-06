import { json } from "body-parser";
import  Mongoose from "mongoose";

import postMessage from "../models/postMessage.js";







export const getPosts =  async (req ,res) =>{
    
  try {
      const postMessages= await postMessage.find();
      console.log(postMessages);
      
      
      res.status(404).json(postMessages);
      
  } catch (error) {
      res.status(404).json({message: error.message+"feeeeeeeeeeeeeeeeel"});
    
      
  }
    
}

export const createPost = async (req,res) => {
    const body = req.body;
    const newPost = new postMessage(body);
    try {
        await newPost.save();
        res.status(201).json(newPost);
        console.log("post is created on the backend" +  `${newPost}`)
    } catch (error) {
       res.status(409)-json({message: error.message});
       
       
   }
}

export const updatePost = async(req,res)=>{
    const{id: _id}=req.params;
    const post= req.body
    if(!Mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('NO Post with that Id is found')

    const updatedPost =  await postMessage.findByIdAndUpdate(_id, {...post,_id},{new:true})
    res.json(updatedPost);
    console.log("post is updated on the backend" + `${newPost}`)

}


export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!Mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await postMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}