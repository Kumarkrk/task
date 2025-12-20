import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './Routing/Userroutes.js';
import route from './Routing/Routes.js';
dotenv.config();
const app=express();
app.listen(process.env.PORT,()=>
{
    console.log("server connected sucessfully");
})
mongoose.connect(process.env.MONGO_URL).then(()=>{try{
    console.log("mongoose connected sucessfully");

}catch(e)
{
    console.log(e);
}})
app.use(express.json());
app.use(cors());
app.use("/user",router);
app.use("/",route);