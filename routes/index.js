"use strict";
import graphlHTTP from 'express-graphql';
import schema from '../schema';

const graphQLRouter = graphlHTTP({
  schema : schema,
  graphiql : true
});

export default graphQLRouter;
