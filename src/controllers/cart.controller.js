const Cart = require('../models/cart.model');
const Product = require('../models/product.model');

const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.id }).populate('items.product');
        if (!cart) return res.status(404).json({ error: 'Carrito no encontrado' });
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el carrito' });
    }
};

const addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const product = await Product.findById(productId);
        if (!product || product.stock < quantity) {
            return res.status(400).json({ error: 'Producto no disponible en stock' });
        }

        let cart = await Cart.findOne({ userId: req.user.id });
        if (!cart) {
            cart = new Cart({ userId: req.user.id, items: [] });
        }

        const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ product: productId, quantity });
        }

        await cart.save();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar al carrito' });
    }
};

const removeFromCart = async (req, res) => {
    try {
        const { productId } = req.body;
        let cart = await Cart.findOne({ userId: req.user.id });
        if (!cart) return res.status(404).json({ error: 'Carrito no encontrado' });

        cart.items = cart.items.filter(item => item.product.toString() !== productId);
        await cart.save();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar del carrito' });
    }
};

module.exports = { getCart, addToCart, removeFromCart };
