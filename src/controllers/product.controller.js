const Product = require("../models/product.model");

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener productos" });
    }
};

const createProduct = async (req, res) => {
    try {
        const { name, price } = req.body;
        const newProduct = new Product({ name, price });
        await newProduct.save();
        res.status(201).json({ message: "Producto creado" });
    } catch (error) {
        res.status(500).json({ error: "Error al crear producto" });
    }
};

module.exports = { getProducts, createProduct };
