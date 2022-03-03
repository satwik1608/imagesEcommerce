const express = require("express");
const middleware = require("./middleware");
const api = require("./api");
const app = express();
const port = process.env.PORT || 1337;

app.get("/products", api.listProducts);
app.get("/products/:id", api.getProduct);
app.use(middleware.handleError);
app.use(middleware.notFound);
app.listen(port, () => console.log(`Server listening on port ${port}`));