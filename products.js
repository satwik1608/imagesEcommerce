const path = require("path");
const fs = require("fs").promises;

const productsFile = path.join(__dirname, "./products.json");
module.exports = {
  list,
  get,
};

async function list(opts = {}) {
  const { offset = 0, limit = 25, tag } = opts;

  const data = await fs.readFile(productsFile);
  return JSON.parse(data)
    .filter((p) => !tag || p.tags.indexOf(tag) >= 0)
    .slice(offset, offset + limit);
}
async function get(id) {
  const data = JSON.parse(await fs.readFile(productsFile));

  for (let i = 0; i < data.length; ++i) {
    if (data[i]._id === id) return data[i];
  }
  return null;
}
