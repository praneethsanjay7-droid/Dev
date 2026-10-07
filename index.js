const express=require("express");
const app=express();

app.get("/",async(req,res)=>{
    res.send("Hello jenkins");
})

const PORT=8070;
app.listen(PORT,()=>{
    console.log(`app is listening to ${PORT} `);
})