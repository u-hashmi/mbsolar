const express = require("express");
const db = require("./database");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const PORT = 5000;

//get all products from database
app.get("/api/products", async (req, res) => {
  let sql = "";
  const { searchText, sorting } = req.query;

  if (searchText === "undefined" || searchText === "All" || searchText === null) {
    sql = `SELECT * FROM products ORDER BY ${sorting || "itemName"} DESC`;
  } else {
    sql = `SELECT * FROM products WHERE
            itemName LIKE '%${searchText}%'
            OR itemDescription LIKE '%${searchText}%'
            ORDER BY ${sorting || "itemName"} DESC
            `;
  }

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.json(rows);
  });
});

//add product to database
app.post("/api/addProducts", async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: "Request body is missing or empty." });
  }

  const { itemName, itemDescription, itemPrice, itemQuantity, selectedUnit, binaryImage } = req.body;

  db.run(
    `INSERT INTO products (itemName, itemDescription, itemPrice, itemQuantity, selectedUnit, binaryImage) VALUES (?, ?, ?, ?, ?, ?)`,
    [itemName, itemDescription, itemPrice, itemQuantity, selectedUnit, binaryImage],
    (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      return res.json({ message: "New product added" });
    }
  );
});

//delete product from database
app.delete("/api/deleteProducts/:itemId", async (req, res) => {
  const { itemId } = req.params;
  db.run(`DELETE FROM products WHERE itemId = ?`, itemId, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.json({ message: "Product deleted" });
  });
});

//update product in database
app.put("/api/updateProduct", async (req, res) => {
  const { itemId, itemName, itemDescription, itemPrice, itemQuantity, selectedUnit, binaryImage } = req.body;
  db.run(
    `UPDATE products SET itemName = ?, itemDescription = ?, itemPrice = ?, itemQuantity = ?, selectedUnit = ?, binaryImage = ? WHERE itemId = ?`,
    [itemName, itemDescription, itemPrice, itemQuantity, selectedUnit, binaryImage, itemId],
    (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      return res.json({ message: "Product updated" });
    }
  );
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
