import Cart from '../models/cart.model.js';
import Product from '../models/product.model.js';

export const getCart = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id).populate('items.product');
        if (!cart) return res.status(404).json({ error: 'Cart not found' });
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch cart' });
    }
};

export const addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        
        let cart = await Cart.findById(req.params.id);
        if (!cart) {
            cart = new Cart({ items: [] });
        }
        
        const itemIndex = cart.items.findIndex(item => item.product.equals(productId));
        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ product: productId, quantity });
        }
        
        await cart.save();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add to cart' });
    }
};

export const removeFromCart = async (req, res) => {
    try {
        const { productId } = req.body;
        let cart = await Cart.findById(req.params.id);
        if (!cart) return res.status(404).json({ error: 'Cart not found' });
        
        cart.items = cart.items.filter(item => !item.product.equals(productId));
        await cart.save();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Failed to remove from cart' });
    }
};
