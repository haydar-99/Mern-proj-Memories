import axios from "axios";

const url= "http://localhost:5000/posts";

// export const fetchPosts = axios.get(url);
export const fetchPosts = axios.get(url)
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error + "api fel");
})
export const createPost  = (newPost) => axios.post(url,newPost) 
export const updatePost = (id,updatedPost)=> axios.patch(`${url}/${id}`, updatedPost)
export const deletePost = (id) => axios.delete(`${url}/${id}`);

