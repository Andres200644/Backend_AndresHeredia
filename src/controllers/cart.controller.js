const Cart = require("../models/cart.model");

const getCart = async (req, res) => {
    try {
        const cart = await Cart.find();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el carrito" });
    }
};

const addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const cartItem = new Cart({ productId, quantity });
        await cartItem.save();
        res.status(201).json({ message: "Producto agregado al carrito" });
    } catch (error) {
        res.status(500).json({ error: "Error al agregar al carrito" });
    }
};

module.exports = { getCart, addToCart };
