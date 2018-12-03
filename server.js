import express from "express";
import cors from "cors";
import session from "express-session";
const MongoStore = require("connect-mongo")(session);

import config from "./config";
import dbConnection from "./db";
import passport from "./passport";

import authRouter from "./routes/auth";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "pass",
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);

app.listen(config.port, () =>
  console.log(`Avocado back running on port ${config.port}...`)
);
