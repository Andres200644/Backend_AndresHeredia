import Product from '../models/product.model.js';

export const getAllProducts = async () => {
  try {
    return await Product.find();
  } catch (error) {
    throw new Error('Error al obtener los productos');
  }
};

export const getProductById = async (id) => {
  try {
    return await Product.findById(id);
  } catch (error) {
    throw new Error('Error al obtener el producto');
  }
};
