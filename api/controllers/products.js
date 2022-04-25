import allProducts from '../models/product.js';


export const getAllProducts = (req, res, next) => {
   const { page, size } = req.query; 
   const start = page * size;
   const end = start + size;

   const products = allProducts.slice(start, end)
  return res.status(200).json({
   products,
   total: allProducts.length
  });
};

export const getProduct = (req, res, next) => {
   const {id} = req.params;

   const product = allProducts.find(p => p.id == id);
   if(!product) return res.status(400).json({
      message: "Product NOT FOUND",
    });
  return res.status(200).json(product);
};
