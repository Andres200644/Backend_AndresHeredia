const Cart = require('../models/cart.model');

exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.find();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch cart' });
    }
};

exports.addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        let cart = await Cart.findOne();
        if (!cart) {
            cart = new Cart({ items: [] });
        }
        cart.items.push({ productId, quantity });
        await cart.save();
        res.status(201).json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add item to cart' });
    }
};
