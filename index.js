var app=express=require('express')

app=express();



app.get("/",function (req,res){
    res.send("Hello Express Js Im Coming to You!");
})

app.listen(8000,function (req,res){
    console.log("Server Run Success!");
});