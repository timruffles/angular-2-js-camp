"use strict";

const express = require("express");
const json = require("body-parser").json;
const morgan = require("morgan");
const _ = require("lodash");
const cors = require("cors");

const PORT = process.env.PORT || 3999;
const API_RESPONSE_TIME = Number(process.env.API_RESPONSE_TIME || 1500);

const app = express();

module.exports = exports = app;

app.use(json());
app.use(cors());
app.use(morgan("short"));

app.post("/test/checkout/success", (req, res) => {
  setTimeout(() => {
    res
      .send({
        ok: true,
      });
  }, API_RESPONSE_TIME);
});

app.post("/test/checkout/failure", (req, res) => {
  setTimeout(() => {
    res
      .status(400)
      .send({
        code: "CREDIT_LIMIT_EXCEEDED",
      })
  }, API_RESPONSE_TIME);
});

app.all("*", (req, res, next) => {
  res.status(404)
    .send({ error: "unknown-route" })
})

if(require.main === module) {
  app.listen(PORT, () => console.log("server listening on ", PORT));
}
