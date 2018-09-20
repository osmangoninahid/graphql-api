"use strict";
import { makeExecutableSchema } from "graphql-tools";
import { typeDef as Product } from "./modules/products/schemas";
import { resolvers } from "./resolvers";

const schema = makeExecutableSchema({
  typeDefs : [Product],
  resolvers
});
export default schema;
