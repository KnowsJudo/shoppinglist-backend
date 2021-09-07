import { Request, Response } from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Product } from "./entity/Product";

let dbConnection: any;

export const port = 3001;
const express = require("express");
const cors = require("cors");
const app = express();
const Woolworths = require("./woolworths.ts");
const Coles = require("./coles.ts");

app.use(express.static("static"));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("shoppinglist backend api. See /items for database");
});

app.get("/items", async (req: Request, res: Response) => {
  const repository = dbConnection.getRepository(Product);
  const products = await repository.find();
  console.log(products);
  res.send([Woolworths, Coles]);
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

createConnection()
  .then(async (connection) => {
    dbConnection = connection;
    // const product = new Product();
    // product.name = "Apples";
    // await connection.manager.save(product);
    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.email = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);
    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);
    // console.log("Here you can setup and run express/koa/any other framework.");
  })
  .catch((error) => console.log(error));
