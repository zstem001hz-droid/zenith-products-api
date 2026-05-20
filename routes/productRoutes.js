// Requirements
const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// CREATE - POST /
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// SHOW - GET /:id
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE - PUT /:id
router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE - DELETE /:id
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product successfully deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// INDEX - GET / (Advanced Querying)
router.get("/", async (req, res) => {
  try {
    // Query object
    const query = {};

    // Filter by category
    if (req.query.category) {
      query.category = req.query.category;
    }

    // Filter by price range
    if (req.query.minPrice || req.query.maxPrice) {
      query.price = {};
      if (req.query.minPrice) {
        query.price.$gte = Number(req.query.minPrice);
      }
      if (req.query.maxPrice) {
        query.price.$lte = Number(req.query.maxPrice);
      }
    }

    // Sort object
    let sort = {};
    if (req.query.sortBy === "price_asc") {
      sort.price = 1;
    } else if (req.query.sortBy === "price_desc") {
      sort.price = -1;
    }

    const products = await Product.find(query).sort(sort);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
