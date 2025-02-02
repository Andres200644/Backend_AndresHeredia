import Cart from '../models/cart.model.js';

// Obtener todos los productos del carrito
export const getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el carrito' });
  }
};

// Agregar un producto al carrito
export const addItemToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const newItem = new Cart({ productId, quantity });
    await newItem.save();
    res.status(201).json({ message: 'Producto agregado al carrito' });
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar producto al carrito' });
  }
};

// Eliminar un producto específico del carrito
export const deleteCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    await Cart.findByIdAndDelete(id);
    res.status(200).json({ message: 'Producto eliminado del carrito' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto del carrito' });
  }
};

// Vaciar el carrito
export const clearCart = async (req, res) => {
  try {
    await Cart.deleteMany();
    res.status(200).json({ message: 'Carrito vaciado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al vaciar el carrito' });
  }
};
