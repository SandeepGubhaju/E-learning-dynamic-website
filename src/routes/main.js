const express = require("express");

const Detail = require("../models/Detail");
const Service = require("../models/Service");
const Slider = require("../models/Slider"); 
const Contact = require("../models/Contact");
const { response } = require("express");

const routes = express.Router();

routes.get ("/",async(req,res)=>{
    const details=await Detail.findOne({"_id":"6305af55eafb9e4bf14be609"})
    const slides = await Slider.find()
    const services = await Service.find()
    
    
   
    
    res.render("index",{
        details:details,
        slides:slides,
        services:services
        
        
    })
    
});

routes.get("/gallery",async(req,res)=>{
    const details= await Detail.findOne({"_id":"6305af55eafb9e4bf14be609"});
   
    res.render("gallery",{
        details:details
    })
        

})


routes.post("/process-contact-form",async(req,res)=>{
    console.log(req.body);

    try{
        const data = await Contact.create(req.body);
       
        res.redirect("/")
    }
    catch(e){
        console.log(e);
        res.redirect("/")
    }
})
        
module.exports = routes;