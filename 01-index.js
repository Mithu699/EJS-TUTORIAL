const express = require("express");
const path = require("path");

const app = express();

// set the view engine as ejs

app.set("view engine", "ejs");

// SET THE DIRECTORY FOR THE VIEWS

app.set("views", path.join(__dirname, "views"));

const products = [
  {
    id: 1,
    title: "product 1",
  },
  {
    id: 2,
    title: "product 2",
  },
  {
    id: 3,
    title: "product 3",
  },
];

app.get("/", (req, res) => {
  res.render("Home", { title: "Home", products: products });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About page" });
});

const port = 3000;
app.listen(port, () => {
  console.log("server is running");
});
