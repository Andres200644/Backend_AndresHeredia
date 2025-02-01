import Product from '../models/product.model.js';

class ProductDAO {
    async create(productData) {
        return await Product.create(productData);
    }

    async findAll() {
        return await Product.find();
    }

    async findById(productId) {
        return await Product.findById(productId);
    }

    async update(productId, updatedData) {
        return await Product.findByIdAndUpdate(productId, updatedData, { new: true });
    }

    async delete(productId) {
        return await Product.findByIdAndDelete(productId);
    }
}

export default new ProductDAO();