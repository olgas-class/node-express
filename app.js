import express from "express";
import fs from "fs";

const app = express();

const port = 3000;

app.use(express.static("public"));

// Rotte delle api
app.get("/", (req, res) => {
  const resData = {
    data: "Benvenuti nelle api delle pizze!",
  };

  res.json(resData);
});

app.get("/menu", (req, res) => {
  // const dataJson = fs.readFileSync("./data/pizzas.json"); // Qui abbiamo la stringa di dati json codificata
  // const menu = JSON.parse(dataJson);

  const menu = [
    {
      name: "Margherita",
      image: "imgs/pizze/margherita.webp",
      ingredients: ["pomodoro", "mozzarella"],
    },
    {
      name: "Marinara",
      image: "imgs/pizze/marinara.jpeg",
      ingredients: ["pomodoro", "aglio", "origano"],
    },
    {
      name: "Diavola",
      image: "imgs/pizze/diavola.jpeg",
      ingredients: ["pomodoro", "mozzarella", "salame piccante"],
    },
    {
      name: "Bufalina",
      image: "imgs/pizze/bufalina.jpeg",
      ingredients: ["pomodoro", "mozzarella di bufala"],
    },
    {
      name: "4 formaggi",
      image: "imgs/pizze/4_formaggi.jpeg",
      ingredients: [
        "pomodoro",
        "mozzarella",
        "gorgonzola",
        "parmigiano",
        "ricotta",
      ],
    },
  ];

  const resData = {
    data: menu,
    success: true,
  };

  res.json(resData);
});

app.listen(port, () => {
  console.log("Server in ascolto");
});
