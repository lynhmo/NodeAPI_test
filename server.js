const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 3000;
const db = require("./api/db");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// let routes = require("./api/routes"); //importing route
// routes(app);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

app.post("/api/login", (req, res) => {
  db.query(
    "SELECT * FROM user WHERE name = ?",
    [req.body.username],
    async (err, response) => {
      if (err) throw err;

      if (response.length === 0) {
        return res.status(400).json("Sai tên tài khoản hoặc mật khẩu");
      }

      const validPassword = await bcrypt.compare(
        req.body.password,
        response[0].password
      );

      if (!validPassword) {
        return res.status(400).json("Sai password");
      }

      res.status(200).json(response[0]);
    }
  );
});
app.post("/api/register", (req, res) => {
  db.query(
    "SELECT * FROM users WHERE name= ?",
    [req.body.username],
    (err, response) => {
      if (err) throw err;

      if (response.length !== 0) {
        return res.status(400).json("Username already taken");
      }

      bcrypt.hash(req.body.password, 10, (err, hashed) => {
        if (err) {
          return next(err);
        }

        db.query(
          `INSERT INTO users (name, email, password) VALUES(?, ?, ?)`,
          [req.body.name, req.body.email, hashed],
          (err, response) => {
            if (err) throw err;
            res.json({ message: "Insert success!" });
          }
        );
      });
    }
  );
});

app.listen(port);

console.log("RESTful API server started on: " + port);
