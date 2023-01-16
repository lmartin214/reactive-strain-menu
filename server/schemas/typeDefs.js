const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    shoppingCart: [Cart]
    Cart: Int
  }

  type Cart {
    _id: ID
    item: String!
    price: Int!
    quantity: Int!
  }

  type Query {
    getUser(_id: ID!): User
    getUsers: [User]
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