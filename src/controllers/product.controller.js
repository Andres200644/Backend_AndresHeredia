import fs from 'fs/promises';
import path from 'path';

const productsFilePath = path.resolve('src/data/products.json');

export const getProducts = async (req, res) => {
  try {
    const data = await fs.readFile(productsFilePath, 'utf-8');
    const products = JSON.parse(data);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos', error: error.message });
  }
};

export const addProduct = async (req, res) => {
  try {
    const { name, price, stock, description, category } = req.body;

    if (!name || !price || !stock) {
      return res.status(400).json({ message: 'Nombre, precio y stock son obligatorios' });
    }

    const data = await fs.readFile(productsFilePath, 'utf-8');
    const products = JSON.parse(data);

    const newProduct = {
      id: products.length + 1,
      name,
      price,
      stock,
      description,
      category
    };

    products.push(newProduct);

    await fs.writeFile(productsFilePath, JSON.stringify(products, null, 2));

    res.status(201).json({ message: 'Producto agregado exitosamente', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar el producto', error: error.message });
  }
};
