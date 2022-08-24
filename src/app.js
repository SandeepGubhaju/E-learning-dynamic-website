const express = require("express");
const hbs = require("hbs")
const mongoose = require("mongoose");
const Detail= require("./models/Detail");
const Slider = require("./models/Slider");
const Service = require("./models/Service")
const bodyParser = require("body-parser")



const routes= require ("./routes/main");


const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use("/static",express.static("public"))
app.use("",routes);




// (template engine)

app.set("view engine","hbs");
app.set("views","views")
hbs.registerPartials("views/partials")


// db connection
mongoose.connect("mongodb://localhost:27017/websiteDb",()=>{
    console.log("data base connected")

    // Service.create([
    //     {
    //         icon:"fab fa-accusoft",
    //         title:"Learn best courses",
    //         description:"We provide best courses that help you to excel in the industry",
    //         linkText:"https://www.freecodecamp.org/",
    //         link:"Check"
    //     },
    //     {
    //         icon:"fab fa-affiliatetheme",
    //         title:"Learn HTML",
    //         description:"We provide best courses that help you to excel in the industry",
    //         linkText:"https://www.freecodecamp.org/",
    //         link:"Learn"
    //     },
    //     {
    //         icon:"fab fa-affiliatetheme",
    //         title:"Learn HTML",
    //         description:"We provide best courses that help you to excel in the industry",
    //         linkText:"https://www.freecodecamp.org/",
    //         link:"Learn"
    //     },
    // ])

    // Slider.create([
    //     {
    //         title:"WorlCup everything you need to know",
    //         subTitle:"The world is goind to be held on november i guess",
    //         imageUrl:"/static/images/image1.jpg"
    //     },
    //     {
    //         title:"Euro cup had the most attendance in the finals",
    //         subTitle:"The final between italy and england was epic.",
    //         imageUrl:"/static/images/image2.jpg"
    //     },
    //     {
    //         title:"preseason is dred",
    //         subTitle:"Some shit club is wining with more goal lead to big clubs.",
    //         imageUrl:"/static/images/image3.jpg"
    //     }
    // ])
    


    // Detail.create({
    //     brandName:"Tech Allstar",
    //     brandIconUrl:"https://yt3.ggpht.com/F2ZYMMTx0yfHbCkAZuuCNTuvrq26eXLYVS07qFTxlvB8Flw8GZc7VQgEAFiqDgfE--fO574=s176-c-k-c0x00ffffff-no-rj",
    //     links:[{
    //         label:"Home",
    //         url:"/"
    //     },
    //     {
    //         label:"Services",
    //         url:"/Services"
    //     },
    //     {
    //         label:"Gallery",
    //         url:"/gallery"
    //     },
    //     {
    //         label:"About",
    //         url:"/about"
    //     },
    //     {
    //         label:"Contact Us",
    //         url:"/contact-us"
    //     },
    // ]
    // })


})


app.listen(process.env.PORT | 3000,()=>{
    console.log("server started sucessfully at port 3000")
})