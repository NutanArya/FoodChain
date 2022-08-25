const express = require("express");
const Bodyparser = require("body-parser");
const ejs = require('ejs');
const path = require("path");
const hbs = require("hbs");
const request = require("request");
const https = require("https");

const app = express();

//require("./db/conn");
//const Signup = require("./db/signup");
const { json } = require("express");

console.log(path.join(__dirname));
//const static_path = path.join(__dirname, "")
//app.use(express.static());
//const partial_path = path.join(__dirname, "../templates/partials");
//const template_path = path.join(__dirname, "../templates/views");

app.set("view engine", "hbs");
app.set("views" , (__dirname, "templates/views"));

app.use(express.json());
app.use(express.urlencoded({extended : true}));

//hbs.registerPartials(__dirname, "templates/partials");
app.use(express.static("public"));
app.use(express.static('folders'));
app.use(express.static('files'));
app.use(Bodyparser.urlencoded({extended : true}));



app.get("/" , function(req,res){
    res.render("index");
});

//app.get("/login",function(req,res){
  //  res.render("login");
//})

app.get("/About", function(req,res){
    res.render("About");
})

app.get("/Contact", function(req,res){
    res.render("Contact");
})

app.post("/profile1" , function(req,res){
    res.render("profile1");
})


app.post("/profile", function(req,res){
    
    const Type = req.body.Post_foodtype;
    const Quantity = req.body.Post_quantity;
    const location = req.body.Post_address;
    const description = req.body.Post_description;
    console.log(Type);
    var user = {
        type :  Type,
        quantity : Quantity,
        Address : location,
        descrip : description
    };
    const No_post = "No post made";
    console.log(user);  
    res.render("profile" , { user});  
});
app.get("/Login",function(req,res){
    res.render("Login")
})
app.get("/Signup",function(req,res){
    res.render("Signup")
})
app.get("/profile",function(req,res){
    res.render("profile")
})
app.get("/profile1",function(req,res){
    res.render("profile1")
})


app.listen(process.env.PORT||  3050, function(){
    console.log("server is running");
});

/*app.get("/signtry",function(req,res){
    res.render("signtry")
})
app.get("/Bio-waste_login",function(req,res){
    res.render("Bio-waste_login")
})
    
    app.get("/dem", function(req,res){
        res.render("dem")
    })
    
    app.get("/read-write", function(req,res){
        res.render("read-write")
    })

//app.get("/Donar_login",function(req,res){
    //   res.render("Donar_login")
    //})
    app.get("/Donar_login",function(req,res){
        res.render("Donar_login")
    })
    app.get("/Donar_signup" ,function(req,res){
        res.render("Donar_signup")
    })*/
    
    /*app.post("/Donar_signup", async(req,res)=> {
        const Donar_email = req.body.Donar_email;
        console.log(Donar_email);
        try{
            const password = req.body.password;
            const cpassword = req.body.confirmpassword;
            if(password === cpassword){
                const signupDonar = new Signup({
                    Donaremail : req.body.Donar_email, 
                   Donarpassword : password,
                   Donarcpassword : cpassword
                })
                const signed = await signupDonar.save();
                res.status(201).render("index");
            }else{
                res.send("password not matched")
            }
            
        }catch(error){
            res.status(400).send(error);
        }
    }) */