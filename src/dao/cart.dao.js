const Cart = require("../models/cart.model");

class CartDAO {
    async getAll() {
        return await Cart.find();
    }

    async addItem(data) {
        return await Cart.create(data);
    }
}

module.exports = new CartDAO();
