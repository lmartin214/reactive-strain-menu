const { User, Cart, Strain } = require('../models');

const resolvers = {
  Query: {
    getUser: async () => {
      return await User.find({}).populate('user')
    },
    getCart : async () => {
      return await Cart.find({}).populate('cart');
    },
    getStrain: async () => {
      // Populate the classes subdocument on every instance of Professor
      return await Strain.find({}).populate('strain');
    }
  }
};

module.exports = resolvers;