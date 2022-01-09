import React, { useState } from 'react';
import {Paper,Typography,TextField,Button} from '@material-ui/core';
import FileBase from "react-file-base64";
import {useDispatch} from 'react-redux';
import { createPost } from '../../actions/posts';


const Form = () =>{
    
    const [postData,handlePost] = useState({
        creator: "", title: "", message: "", tags:"", selectedFile: ""

    })
    const dispatch= useDispatch();



   const  handleSubmit = (e) =>{
       e.preventDefault();
       dispatch(createPost(postData));
       console.log("post is created");

    };
    return(
        <Paper>
            <form autoComplete='off'  onSubmit={handleSubmit} >
            <Typography variant='h6'>Createing Memory</Typography>
            <TextField name='creator' label="Creator" fullWidth variant="outlined" value={postData.creator} 
            onChange={(e) => handlePost({ ...postData,creator: e.target.value})} ></TextField>

            <TextField name='title' label="title" fullWidth variant="outlined" value={postData.title} 
            onChange={(e) => handlePost({ ...postData, title: e.target.value})} ></TextField>

            <TextField name='message' label="message" fullWidth variant="outlined" value={postData.message} 
            onChange={(e) => handlePost({ ...postData, message: e.target.value})} ></TextField>
            
            <TextField name='tags' label="tags" fullWidth variant="outlined" value={postData.tags} 
            onChange={(e) => handlePost({ ...postData, tags: e.target.value})} ></TextField>

            <div>
                <FileBase type="file" multiple={false} 
                onDone={({base64}) => handlePost({...postData, selectedFile:base64})}></FileBase>
            </div>
            <Button  variant='outlined' color="primary" size='large' type='submit' fullWidth>Submit</Button>
            <Button variant='outlined' color="secondary" size='small'  fullWidth> Clear</Button>     {/*impelment Onclick*/}

            </form>
        </Paper>






    );
}

export default Form;