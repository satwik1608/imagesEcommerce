const path = require("path");
const fs = require("fs").promises;
const db = require("./db.js");
const cuid = require("cuid");

const imageSchema = new db.Schema({
  description: String,
  imgThumb: String,
  img: String,
  link: String,
  userId: String,
  userName: String,
  userLink: String,
  tags: { type: [String], index: true },
});

const Product = db.model("Product", imageSchema);

const productsFile = path.join(__dirname, "./products.json");
module.exports = {
  list,
  get,
  create,
};

async function create(fields) {
  const product = await new Product(fields).save();
  return product;
}

async function list(opts = {}) {
  const { offset = 0, limit = 25, tag } = opts;

  const query = tag ? { tags: tag } : {};
  const products = await Product.find(query)
    .sort({ _id: 1 })
    .skip(offset)
    .limit(limit);

  return products;
}
async function get(id) {
  const product = await Product.findById(id);
  return product;
}
