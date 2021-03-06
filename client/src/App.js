import React, {useState,useEffect} from 'react';
import {Container,AppBar, Typography, Grow, Grid} from "@material-ui/core";
import {useDispatch} from  'react-redux'

import {getPosts} from './actions/posts';
// import { red } from '@material-ui/core/colors';
import memories from "./images/images.jpg"
import Posts from "./components/Posts/Posts.js"
import Form from "./components/Form/Form.js"


const App = ()=>{
    const dispatch = useDispatch();
    const [currentId,setCurrentId]= useState(null);

    useEffect(() => {
        dispatch(getPosts())




    },[currentId,dispatch]);
    return (

        <Container 
            maxWidth = "lg">
            <AppBar position='static' color="inherit">
                <Typography variant="h2" align='center' >
                    Memories
                    <img src={memories} alt="memoris" height={60}/>
                </Typography>
            </AppBar>
            <Grow in >
                <Container>
                    <Grid container justify="space-between" alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>  <Posts setCurrentId={setCurrentId} /></Grid>
                        <Grid item xs={12} sm={4}>  <Form currentId={currentId} setCurrentId={setCurrentId}/></Grid>
                    </Grid>
                </Container>
            </Grow>


               
        </Container>





    )

}

export default App