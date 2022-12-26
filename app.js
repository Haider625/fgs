const express = require("express")
const body_parser = require("body-parser")
const mongoose = require("mongoose")
const Rout =require("./rout/router")
const path = require("path")
const app = express();
const PORT = process.env.PORT || 3000;
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://lost:lostThings@cluster0.8zz539w.mongodb.net/?retryWrites=true&w=majority',{
useNewUrlParser:true ,
useUnifiedTopology : true
});
const connection = mongoose.connection;
connection.on('error' , (res,req) => {
    console.log("connected  Erorr")
});
connection.on('connected' , () => {
    console.log("connected whith cloud")
})



app.use([body_parser.urlencoded({extended : true}),express.json()]);
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname ,"productImage")));
app.use("/" , Rout);


app.listen(PORT,() => {
    console.log("it is work");
})