const Product = require('../models/product.model');

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

exports.addProduct = async (req, res) => {
    try {
        const { name, price, stock } = req.body;
        const newProduct = new Product({ name, price, stock });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add product' });
    }
};