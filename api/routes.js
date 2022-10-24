"use strict";
module.exports = function (app) {
  let productsCtrl = require("./controllers/ProductsController");
  let drinksCtrl = require("./controllers/Drinks.js");
  let usersCtrl = require("./controllers/user");

  // todoList Routes
  app.route("/products").get(productsCtrl.get).post(productsCtrl.store);
  app.route("/Drinks").get(drinksCtrl.get).post(drinksCtrl.store);
  app.route("/Users").get(usersCtrl.get).post(usersCtrl.store);

  app
    //products
    // .route("/products/:productId")
    // .get(productsCtrl.detail)
    // .put(productsCtrl.update)
    // .delete(productsCtrl.delete)
    //drinks
    // .route("/Drinks/:DrinksId")
    // .get(drinksCtrl.detail)
    // .put(drinksCtrl.update)
    // .post(drinksCtrl.store)
    // .delete(drinksCtrl.delete);
    //users
    .route("/User/:UserId")
    .get(usersCtrl.detail)
    .put(usersCtrl.update)
    .post(usersCtrl.store)
    .delete(usersCtrl.delete);
};
