"use strict";
import Product from "../models";
export const productResolver = {
  Query: {
    async getProduct(root, {_id}){
      return await Product.findById(_id);
    },
    async allProducts() {
      return await Product.find();
    }
  },
  Mutation: {
    async createProduct(root, { input }) {
      return await Product.create(input);
    },
    async updateProduct(root, {_id, input}){
      return await Product.findOneAndUpdate({
        _id
      },input,{
        new : true
      })
    },
    async deleteProduct(root,{_id}){
      return await Product.findOneAndRemove({
        _id
      })
    }
  }
};

