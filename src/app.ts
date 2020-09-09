"use strict";

import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

import { json, raw, text, urlencoded } from "body-parser";

// body Parsers
app.use(json());
app.use(raw());
app.use(text());
app.use(urlencoded({ extended: true }));

//        ******************EndPoint V1*********************
app.post("/api/v1/parse", (req: Request, res: Response, next: NextFunction) => {
  // deconstrct
  const { data } = req.body;
  // splice user firstName
  const userFisrtName = data.slice(0, 8);
  // splice user lastName
  const userLastName = data.slice(8, 18);

  res.send({
    statusCode: 200,
    data: {
      firstName: userFisrtName,
      lastName: userLastName,
      clientId: "9994567",
    },
  });
});

//          ******************EndPoint V2*********************
app.post("/api/v2/parse", (req: Request, res: Response, next: NextFunction) => {
  // deconstrct
  const { data } = req.body;
  // splice user firstName
  const userFisrtName = data.slice(0, 4);
  // splice user lastName
  const userLastName = data.slice(8, 15);

  res.send({
    statusCode: 200,
    data: {
      firstName: userFisrtName,
      lastName: userLastName,
      clientId: "999-4567",
    },
  });
});

app.listen(5000, () => console.log("Server Runing"));
