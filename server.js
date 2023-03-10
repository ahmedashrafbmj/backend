const express = require('express');
const mainRouter = require('./Route/mainrt')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');



const PORT = process.env.PORT || 9000;
const app = express()
const cors = require("cors");
const bd = require("body-parser");


app.use(cors());

dotenv.config({path: './config.env'});

const db = process.env.DATABASE;
// console.log(process.env.DATABASE)

mongoose.connect(db,{
    
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,    

}).then(()=>{
    console.log(`connection successfull`)
       
}).catch((err)=>{
    console.log(`connection not Successful`)
})

app.use(
    bd.urlencoded({
      extended: false,
    })
  );
  app.use(bd.json());
// app.use(urlParser);
app.use(mainRouter)


if (process.env.NODE_ENV === "production") {
  // app.use(express.static("client/build"));
  const path = require("path");
  app.get("/", (req, res) => {
    res.send("hello world");
  });
}






app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})