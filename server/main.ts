import express from "express";
import bodyParser from "body-parser";
import { connect } from "./db";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./router";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
  })
);

const startServer = async () => {
  await connect("mongodb://localhost:27017/api", "api");

  app.listen(3012, function () {
    console.log("API app started");
  });
};

startServer();
