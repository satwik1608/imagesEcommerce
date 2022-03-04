const express = require("express");
const middleware = require("./middleware");
const api = require("./api");
const app = express();

app.use(express.json());

app.get("/products", api.listProducts);
app.get("/products/:id", api.getProduct);
app.post("/products", api.createProduct);
app.put("/products/:id", api.editProduct);
app.delete("/products/:id", api.deleteProduct);

app.get("/orders", api.listOrders);
app.post("/orders", api.createOrder);

app.use(middleware.handleError);
app.use(middleware.notFound);

const port = process.env.PORT || 1337;
app.listen(port, () => console.log(`Server listening on port ${port}`));
