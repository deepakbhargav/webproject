//requires and check  dependencis
const express=require("express");
const path=require("path");
const hbs=require("hbs");
const app=express();
const port=process.env.PORT || 1900;
//public static path
const staticpath=path.join(__dirname,"../public");
const viewpath=path.join(__dirname,"../templates/views");
const partipath=path.join(__dirname,"../templates/partiles");

app.set("view engine","hbs")
app.set("views",viewpath)
hbs.registerPartials(partipath)
app.use(express.static(staticpath))
//routing
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about",{
        hello:"Mern Stack",
        hii:"Developer"
    })
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render("404")
})
app.listen(port,()=>{
    console.log("your server is listening");
})

