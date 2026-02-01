import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors';
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv';

const app=express();
dotenv.config();
app.use(cors());



app.use(express.json({ limit: "30mb" })); //to read json data
app.use(express.urlencoded({ limit: "30mb", extended: true }));//to read form data 
app.use('/posts',postRoutes);

const CONNECTION_URL=process.env.CONNECTION_URL;

const PORT=process.env.PORT|| 5000

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT,()=>console.log(`server running on ${PORT}`)))
  .catch(err => console.error(err));
