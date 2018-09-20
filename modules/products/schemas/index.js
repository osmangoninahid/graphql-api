export const typeDef = `
  type Product {
    _id: ID!
    title: String!
    qty: Int
  }
  type Query {
    getProduct(_id : ID!): Product
    allProducts: [Product]
  }
  input ProductInput {
    title: String!
    qty: Int
  }
  type Mutation {
    createProduct(input: ProductInput) : Product
    updateProduct(_id : ID!, input: ProductInput) : Product
    deleteProduct(_id : ID!): Product
  }
`;
