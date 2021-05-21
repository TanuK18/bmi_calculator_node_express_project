const express=require("express");

const boyParser=require("body-parser");

const app=express();

app.use(boyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/bmi.html");
});

app.post("/",function(req,res){
  var weight=Number(req.body.weight);
  var height=Number(req.body.height);
  var bmi=weight/(height*height);
  var message="";
  if(bmi>=25.0)
    message="Your Body Mass Index : "+bmi+". This is considered as overweight.";
  else if(bmi<18.5)
  message="Your Body Mass Index : "+bmi+". This is considered as underweight.";
  else
  message="Your Body Mass Index : "+bmi+". This is considered as normal.";
  res.send("<center><h1>RESULT</h1><p>"+message+"</p></center>");
});

app.listen(3000,function(){
    console.log("server running");
})