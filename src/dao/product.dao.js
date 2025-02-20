const Product = require("../models/product.model");

class ProductDAO {
    async getAll() {
        return await Product.find();
    }

    async create(data) {
        return await Product.create(data);
    }
}

module.exports = new ProductDAO();
