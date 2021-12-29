import express from "express";
import bodyParser  from "body-parser";
import  mongoose  from "mongoose";
import cors from "cors";

import postRoutes from "./routes/post.js"

const app= express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts',postRoutes);


//DATABASE CONECCTION-CONFIG
const CONNECTION_URL = 'mongodb+srv://mernProject:mernProject2021@cluster0.oclkj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`server is running on port: ${PORT}` )))
.catch((error) => console.log(error.message));



// const connectionParams={
//     useNewUrlParser: true,
//     // useCreateIndex: true,
//     useUnifiedTopology: true 
// }
// mongoose.connect(CONNECTION_URL,connectionParams)
//     .then( () => {
//         console.log('Connected to database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     })
