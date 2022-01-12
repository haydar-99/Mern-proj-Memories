import React from 'react';
import Post from './Post/Post';
import {useSelector} from 'react-redux'
import {Grid,CircularProgress} from "@material-ui/core"


const Posts = ({setCurrentId}) =>{
    const posts = useSelector((state) =>{return state.posts})
    // console.log("det här är " + posts.title)
    return(
       !posts.length ? <CircularProgress/>:(
           <Grid container alignItems="stretch" spacing={3}>
           {posts.map((post)=> (
               <Grid key={posts._id} item xs={12} sm={6}>
                   <Post post={post} setCurrentId={setCurrentId}> </Post>
               </Grid>
           ))}
           
                
           </Grid>
       )
       
       
       





    );
   
}


export default Posts;