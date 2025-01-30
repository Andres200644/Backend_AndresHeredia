import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true }
        }
    ],
    totalPrice: { type: Number, default: 0 }
});

// Middleware para calcular el precio total antes de guardar
cartSchema.pre('save', async function (next) {
    let total = 0;
    this.items.forEach(item => {
        total += item.quantity * item.productId.price;
    });
    this.totalPrice = total;
    next();
});

const Cart = mongoose.model('Cart', cartSchema);
export default Cart;
