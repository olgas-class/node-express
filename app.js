import express from "express";
import pizzasRouter from "./routers/pizzas.js";
import tablesRouter from "./routers/tables.js";

const app = express();

const port = 3000;

app.use(express.static("public"));
app.use(express.json());

// Rotte delle api
app.get("/", (req, res) => {
  const resData = {
    data: "Benvenuti nelle api delle pizze!",
  };

  res.json(resData);
});

app.use("/pizzas", pizzasRouter);
app.use("/tables", tablesRouter);

app.listen(port, () => {
  console.log("Server in ascolto");
});
