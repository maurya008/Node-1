require("dotenv").config({})
const express = require("express")
const User = require("./model/user")
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Welcome to ineuron</h1>")
})

app.post("/signup", async(req, res) => {
    //for all mandatory fields
    const { firstname, lastname, email, password } = req.body
    if( !(email && password && firstname && lastname) ) {
        res.status(400).send("All the fields are required")
    }
    //unique email ids
   const extuser = await User.findOne(email)
   if(extuser) {
    res.status(400).send("User Already Exist")
   }

   //Password  bycrypt package npm and one more package


})

//test i nuerolab commit


module.exports = app;