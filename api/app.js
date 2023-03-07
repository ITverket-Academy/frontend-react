const express = require("express");
const app = express();
const port = 8080;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

const products = [
  {
    id: 1,
    name: "Nike Sportswear - T-shirt - black/white",
    details: "Short sleeves, 100% cotton",
    price: 299,
    image: "https://i.imgur.com/khA6N5t.png",
    size: "M",
    category: "t-shirts",
  },
  {
    id: 2,
    name: "Adidas Originals - Sweatshirt - black",
    details: "ESSENTIAL - Sweatshirt",
    price: 349,
    image: "https://i.imgur.com/0SGO6bA.png",
    size: "L",
    category: "sweatshirts",
  },
  {
    id: 3,
    name: "Levi's® - Jeans Skinny Fit - black",
    details: "SKINNY TAPER - Jeans Skinny Fit",
    price: 899,
    image: "https://i.imgur.com/RoKTVPc.png",
    category: "jeans",
  },
  {
    id: 4,
    name: "Tommy Hilfiger - Hoodie - blue",
    details: "LOGO HOODY - Hoodie",
    price: 799,
    image: "https://i.imgur.com/uBeWXaE.png",
    size: "XL",
    category: "sweatshirts",
  },
  {
    id: 5,
    name: "adidas Originals",
    details: "NMD R1 PRIMEBLUE UNISEX - Joggesko",
    price: 1047,
    image: "https://i.imgur.com/lij63le.png",
    category: "shoes",
  },
  {
    id: 6,
    name: "Nike Sportswear",
    details: "AIR FORCE 1 '07 - Joggesko",
    price: 1145,
    image: "https://i.imgur.com/YlPHk0G.png",
    size: "S",
    category: "shoes",
  },
  {
    id: 7,
    name: "Jack & Jones",
    details: "JJICHRIS JJORIGINAL - Jeans straight leg",
    price: 579,
    image: "https://i.imgur.com/Up4v3Qn.png",
    size: "S",
    category: "jeans",
  },
  {
    id: 8,
    name: "Pier One",
    details: "Slippers",
    price: 249,
    image: "https://i.imgur.com/nlMk0vr.png",
    size: "S",
    category: "shoes",
  },
  {
    id: 9,
    name: "Pier One",
    details: "Sweatshirt",
    price: 249,
    image: "https://i.imgur.com/GfGdg3n.png",
    size: "XL",
    category: "sweatshirts",
  },
  {
    id: 10,
    name: "Fila",
    details: "BELLANO TEE UNISEX - T-shirts med print",
    price: 249,
    image: "https://i.imgur.com/KOTGvZC.png",
    size: "XL",
    category: "t-shirts",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (_, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product)
    res.status(404).send("The product with the given ID was not found.");
  res.send(product);
});

// Get products that match the user search
app.get("/products/search/:search", (req, res) => {
  const search = req.params.search.toLowerCase();
  const searchResults = products.filter((p) => {
    return (
      p.name.toLowerCase().includes(search) ||
      p.details.toLowerCase().includes(search)
    );
  });
  res.send(searchResults);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
