const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const { v4: uuidv4 } = require("uuid");
PORT = 8080;

app.use(express.json());
function getproducts() {
  try {
    let data = fs.readFileSync(path.join(__dirname, "db.json"));
    data = JSON.parse(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}
function saveproduct(data) {
  try {
    fs.writeFileSync(path.join(__dirname, "db.json"), JSON.stringify(data));
  } catch (err) {
    console.group(err);
  }
}

// add product middleware
function validateProduct(req, res, next) {
  let { name, brand, color, category, price } = req.body;
  if (!name || !brand || !color || !category || !price) {
    return res.status(300).send("fill all details");
  }
  next();
}

app.get("/products", (req, res) => {
  let { category } = req.query;
  let products = getproducts();
  if (category) {
    let filteredProducts = products.filter(
      (el) => el.category.toLowerCase() == category.toLowerCase()
    );
    if(filteredProducts.length>0){
        res.status(200).send(filteredProducts);
    }
    else{
        res.status(404).send("No Product found in this category")
    }
  } else {
    res.status(200).send(products);
  }
});

app.post("/products", validateProduct, (req, res) => {
  let { name, brand, color, category, price } = req.body;
  let products = getproducts();
  let newProduct = {
    id: uuidv4(),
    name,
    brand,
    color,
    category,
    price,
  };
  products.push(newProduct);
  saveproduct(products);
  res.status(200).send("Product Successfully Added");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening to PORT ${PORT}`);
  }
});
