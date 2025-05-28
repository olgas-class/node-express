import express from "express";
import pizzasRouter from "./routers/pizzas.js";
import tablesRouter from "./routers/tables.js";
import loggingMiddleware from "./middlewares/loggingMiddleware.js";
import routeNotFound from "./middlewares/routeNotFound.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

const port = 3000;

app.use(express.static("public"));
app.use(express.json());

// registrato a livello globale
app.use(loggingMiddleware);

// Rotte delle api
app.get("/", (req, res) => {
  const resData = {
    data: "Benvenuti nelle api delle pizze!",
  };

  res.json(resData);
});

app.use("/pizzas", pizzasRouter);
app.use("/tables", tablesRouter);

app.use(routeNotFound);

// Registrazione del middleware di errore
app.use(errorHandler);

app.listen(port, () => {
  console.log("Server in ascolto");
});
