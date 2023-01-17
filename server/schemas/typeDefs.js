const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    shoppingCart: [Cart]
    Cart: Float!
  }

  type Cart {
    _id: ID
    product: String!
    total: Float!
    quantity: Int!
  }

  type Strain {
    name: String!
    type: String!
    thcContent: Float!
    cbdContent: Float!
    price: Float!
    terpeneProfile: String!
    effects: [String]!
    flavorNotes: [String]!
    availability: Boolean!
  }

  type Query {
    getUser(_id: ID!): User
    getUsers: [User]
    getCart(_id: ID!): Cart
    getCarts: [Cart]
    getStrain(_id: ID!): Strain
    getStrains: [Strain]
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
    ): User
    deleteUser(_id: ID!): User
    updateUser(_id: ID!): User
  }
`;

module.exports = typeDefs;