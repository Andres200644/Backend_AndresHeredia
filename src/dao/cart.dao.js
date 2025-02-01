import Cart from '../models/cart.model.js';

class CartDAO {
    async create(cartData) {
        return await Cart.create(cartData);
    }

    async findAll() {
        return await Cart.find().populate('products.product');
    }

    async findById(cartId) {
        return await Cart.findById(cartId).populate('products.product');
    }

    async addProduct(cartId, productId, quantity) {
        const cart = await Cart.findById(cartId);
        if (!cart) return null;

        const productIndex = cart.products.findIndex(p => p.product.toString() === productId);
        if (productIndex !== -1) {
            cart.products[productIndex].quantity += quantity;
        } else {
            cart.products.push({ product: productId, quantity });
        }

        return await cart.save();
    }

    async removeProduct(cartId, productId) {
        return await Cart.findByIdAndUpdate(cartId, {
            $pull: { products: { product: productId } }
        }, { new: true });
    }

    async clearCart(cartId) {
        return await Cart.findByIdAndUpdate(cartId, { products: [] }, { new: true });
    }
}

export default new CartDAO();