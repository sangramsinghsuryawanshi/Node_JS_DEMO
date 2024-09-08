const express=require('express');
const path=require('path');

const app=express();

app.use(express.static(path.join(__dirname,"public")));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"public","home.html"));
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,"public","about.html"));
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,"public","contact.html"));
})

app.listen(3000,()=>
{
    console.log("server is running on port 3000");
})