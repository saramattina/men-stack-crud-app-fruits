//left off at delete in class repo

const express = require('express');
const app = express();
const db = require("./db/connection.js");
const Fruit = require("./models/fruit.js");


app.use(express.urlencoded({ extended: false }));



app.get("/", (req, res) => {
   res.render("index.ejs");
 });

 app.get("/fruits", async (req, res) => {
   const fruitsData = await Fruit.find();
   res.render("fruits/index.ejs", {fruits: fruitsData})
 })


app.get("/fruits/new", (req, res) => {
   res.render("fruits/new.ejs")
})

app.get("/fruits/:id", async (req, res) => {
   const fruitData = await Fruit.findById(req.params.id);
   res.render("fruits/show.ejs", {fruit: fruitData});
})

app.post("/fruits", async (req, res) => {

   if (req.body.isReadyToEat === "on") {
      req.body.isReadyToEat = true;
    } else {
      req.body.isReadyToEat = false;
    }
   await Fruit.create(req.body)
   res.redirect("/fruits");
})

db.on("connected", () => {
   console.log("connected to mongodb");
   

   app.listen(3000, () => {
      console.log('Listening on port 3000');
    });
})


