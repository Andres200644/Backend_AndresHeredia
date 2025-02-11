import Cart from '../models/cart.model.js';

export const getCartByUserId = async (userId) => {
  try {
    return await Cart.findOne({ userId });
  } catch (error) {
    throw new Error('Error al obtener el carrito');
  }
};

export const addItemToCart = async (userId, productId, quantity) => {
  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const existingItem = cart.items.find((item) => item.productId.toString() === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();
    return cart;
  } catch (error) {
    throw new Error('Error al agregar el producto al carrito');
  }
};
