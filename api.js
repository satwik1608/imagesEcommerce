const Products = require("./products");

module.exports = {
  listProducts,
  getProduct,
  createProduct,
};

async function listProducts(req, res) {
  const { offset = 0, limit = 25, tag } = req.query;
  const products = await Products.list({
    offset: Number(offset),
    limit: Number(limit),
    tag,
  });
  res.json(products);
}

async function getProduct(req, res, next) {
  const { id } = req.params;

  const product = await Products.get(id);
  if (!product) return next();

  res.json(product);
}

async function createProduct(req, res, next) {
  const product = await Products.create(req.body);

  res.json(product);
}
