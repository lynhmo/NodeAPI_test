"use strict";
module.exports = function (app) {
  // let productsCtrl = require("./controllers/ProductsController");
  let drinksCtrl = require("./controllers/Drinks.js");

  // todoList Routes
  // app.route("/products").get(productsCtrl.get).post(productsCtrl.store);
  app.route("/Drinks").get(drinksCtrl.get).post(drinksCtrl.store);

  app
    //products
    // .route("/products/:productId")
    // .get(productsCtrl.detail)
    // .put(productsCtrl.update)
    // .delete(productsCtrl.delete)
    //drinks
    .route("/Drinks/:drinkId")
    .get(drinksCtrl.detail)
    .put(drinksCtrl.update)
    .delete(drinksCtrl.delete);
};
