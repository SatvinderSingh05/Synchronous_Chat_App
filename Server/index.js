import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"

dotenv.config();
const app=express();
const port=process.env.PORT||3001;
//add "1" inn databaseurl
const databaseURL=process.env.DATABASE_URL;   
//frontend backend communication if both hosted in different vps
app.use(cors({
    //multiple frontends
origin:[process.env.ORIGIN],
methods:["GET","POST","PUT","PATCH","DELETE"],
//enable cookies 
credentials:true,
}));
//cookies from frontend  and it is a middleware
app.use(cookieParser())
//to have body in a json format  payload will be in json format
app.use(express.json());

const server=app.listen(port,()=>{
    console.log(`Server is running http://localhost:${port}`);
});

mongoose.connect(databaseURL).then(()=>console.log(`DB Connection Successful`)).catch(err=>console.log(err.message))


// mvc architecture
// models view (controllers logic to get the data from the servera)
// view react models mongodb model