//Cart Schema
const { Schema, model } = require('mongoose');

const cartSchema = new Schema({
  // product references the given product schema
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Strain',
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

// calculate the total when an item is added or removed from the cart
cartSchema.pre('save', function(next) {
  let total = 0;
  for (let i = 0; i < this.product.length; i++) {
    total += this.product[i].price * this.quantity[i];
  }
  this.total = total;
  next();
});

const Cart = model('Cart', cartSchema);

module.exports = Cart;